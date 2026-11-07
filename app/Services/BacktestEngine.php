<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use RuntimeException;

class BacktestEngine
{
    private const LIQUIDITY_FVG = 'Liquidity Sweep + FVG Reversal';

    public function run(string $pair, string $timeframe, string $strategy, float $capital, float $riskPercent = 0.5): array
    {
        if ($strategy === self::LIQUIDITY_FVG) {
            return $this->runLiquidityFvg($pair, $timeframe, $capital, $riskPercent);
        }

        $symbol = str_replace('/', '', strtoupper($pair));
        $interval = ['1h' => '1h', '4h' => '4h', '1d' => '1d'][$timeframe] ?? '1h';
        try {
            $response = Http::timeout(10)->get('https://data-api.binance.vision/api/v3/klines', [
                'symbol' => $symbol, 'interval' => $interval, 'limit' => 1000,
            ]);
            if ($response->failed() || !is_array($response->json())) {
                throw new RuntimeException('API Error');
            }
            $klines = $response->json();
        } catch (\Exception $e) {
            // Legacy MA strategy fallback. Liquidity/FVG backtests never use synthetic data.
            $klines = [];
            $now = time() * 1000;
            for ($i = 0; $i < 1000; $i++) {
                $close = 60000 + sin($i / 10) * 2000 + rand(-500, 500);
                $klines[] = [$now - ((1000 - $i) * 3600000), $close, $close, $close, $close, 0];
            }
        }

        $balance = $capital;
        $position = 0.0;
        $buyPrice = 0.0;
        $wins = 0;
        $losses = 0;
        $peakEquity = $capital;
        $maxDrawdown = 0.0;
        $equityCurve = [];
        $closes = [];
        $lastClose = $capital;

        foreach ($klines as $kline) {
            $timestamp = (int) $kline[0];
            $closePrice = (float) $kline[4];
            $lastClose = $closePrice;
            $closes[] = $closePrice;
            if (count($closes) > 21) {
                $maFast = array_sum(array_slice($closes, -9)) / 9;
                $maSlow = array_sum(array_slice($closes, -21)) / 21;
                $prevFast = array_sum(array_slice($closes, -10, 9)) / 9;
                $prevSlow = array_sum(array_slice($closes, -22, 21)) / 21;
                $crossUp = $prevFast <= $prevSlow && $maFast > $maSlow;
                $crossDown = $prevFast >= $prevSlow && $maFast < $maSlow;

                if ($crossUp && $position == 0) {
                    $buyPrice = $closePrice;
                    $position = ($balance * 0.999) / $buyPrice;
                    $balance = 0;
                } elseif ($crossDown && $position > 0) {
                    $sellValue = $position * $closePrice * 0.999;
                    ($sellValue - ($position * $buyPrice)) > 0 ? $wins++ : $losses++;
                    $balance = $sellValue;
                    $position = 0;
                }
            }

            $equity = $balance + ($position * $closePrice);
            $peakEquity = max($peakEquity, $equity);
            $maxDrawdown = max($maxDrawdown, ($peakEquity - $equity) / $peakEquity * 100);
            $equityCurve[] = ['time' => date('Y-m-d H:i', $timestamp / 1000), 'equity' => round($equity, 2)];
        }

        if ($position > 0) {
            $balance = $position * $lastClose * 0.999;
            ($balance - ($position * $buyPrice)) > 0 ? $wins++ : $losses++;
        }

        return $this->formatResults($balance, $capital, $wins, $losses, $maxDrawdown, $equityCurve);
    }

    /** Approximation based on USD-M futures OHLCV; it does not model OI, delta, liquidations, sessions, or funding. */
    private function runLiquidityFvg(string $pair, string $timeframe, float $capital, float $riskPercent): array
    {
        if (!in_array($timeframe, ['5m', '15m'], true)) {
            throw new RuntimeException('Для Liquidity Sweep + FVG выберите таймфрейм исполнения 5m или 15m.');
        }
        if ($riskPercent < 0.5 || $riskPercent > 1) {
            throw new RuntimeException('Риск на сделку должен быть в диапазоне 0,5–1%.');
        }

        $response = Http::timeout(15)->get('https://fapi.binance.com/fapi/v1/klines', [
            'symbol' => str_replace('/', '', strtoupper($pair)), 'interval' => $timeframe, 'limit' => 1000,
        ]);
        if ($response->failed() || !is_array($response->json())) {
            throw new RuntimeException('Не удалось получить исторические фьючерсные свечи. Проверьте торговую пару и повторите позже.');
        }
        $candles = array_values(array_filter(array_map(static function ($row) {
            if (!is_array($row) || count($row) < 6) return null;
            return ['time' => (int) $row[0], 'open' => (float) $row[1], 'high' => (float) $row[2], 'low' => (float) $row[3], 'close' => (float) $row[4], 'volume' => (float) $row[5]];
        }, $response->json())));
        if (count($candles) < 250) {
            throw new RuntimeException('Недостаточно исторических свечей для расчёта 1H-контекста и FVG-сетапов.');
        }

        $balance = $capital;
        $wins = $losses = 0;
        $equityCurve = [];
        $peakEquity = $capital;
        $maxDrawdown = 0.0;
        $tradeCount = 0;
        $lastIndex = count($candles) - 1;
        $feeRate = 0.0004;
        $i = 14;

        while ($i < $lastIndex - 2) {
            $direction = $this->hourlyBias($candles, $i, $timeframe);
            $signal = $direction === 0 ? null : $this->findLiquidityFvgSignal($candles, $i, $direction);
            if ($signal === null) { $i++; continue; }

            $entryIndex = null;
            for ($j = $signal['formed_at'] + 1; $j <= min($signal['formed_at'] + 24, $lastIndex); $j++) {
                $bar = $candles[$j];
                $stopTouched = $direction === 1 ? $bar['low'] <= $signal['stop'] : $bar['high'] >= $signal['stop'];
                if ($stopTouched) break;
                if ($bar['low'] <= $signal['entry'] && $bar['high'] >= $signal['entry']) { $entryIndex = $j; break; }
            }
            if ($entryIndex === null) { $i = $signal['formed_at'] + 1; continue; }

            $entry = $signal['entry'];
            $stop = $signal['stop'];
            $riskDistance = abs($entry - $stop);
            if ($riskDistance <= 0 || $balance <= 0) { $i = $entryIndex + 1; continue; }
            $quantity = ($balance * ($riskPercent / 100)) / $riskDistance;
            $balance -= $quantity * $entry * $feeRate;
            $tp1 = $entry + ($direction * 1.5 * $riskDistance);
            $tp2 = $entry + ($direction * 3.0 * $riskDistance);
            $remaining = $quantity;
            $tp1Taken = false;
            $exitIndex = $lastIndex;
            $exitPrice = $candles[$lastIndex]['close'];

            for ($j = $entryIndex; $j <= $lastIndex; $j++) {
                $bar = $candles[$j];
                $activeStop = $tp1Taken ? $entry : $stop;
                $stopHit = $direction === 1 ? $bar['low'] <= $activeStop : $bar['high'] >= $activeStop;
                $tp1Hit = !$tp1Taken && ($direction === 1 ? $bar['high'] >= $tp1 : $bar['low'] <= $tp1);
                $tp2Hit = $direction === 1 ? $bar['high'] >= $tp2 : $bar['low'] <= $tp2;
                // Ambiguous OHLC ordering is resolved conservatively: stop first.
                if ($stopHit) {
                    $exitPrice = $activeStop; $exitIndex = $j;
                    $balance += $direction * ($exitPrice - $entry) * $remaining - ($remaining * $exitPrice * $feeRate);
                    $remaining = 0; break;
                }
                if ($tp1Hit) {
                    $partial = $quantity * 0.5;
                    $balance += $direction * ($tp1 - $entry) * $partial - ($partial * $tp1 * $feeRate);
                    $remaining -= $partial; $tp1Taken = true;
                }
                if ($tp2Hit && $remaining > 0) {
                    $exitPrice = $tp2; $exitIndex = $j;
                    $balance += $direction * ($exitPrice - $entry) * $remaining - ($remaining * $exitPrice * $feeRate);
                    $remaining = 0; break;
                }
            }
            if ($remaining > 0) {
                $balance += $direction * ($exitPrice - $entry) * $remaining - ($remaining * $exitPrice * $feeRate);
            }

            $tradeCount++;
            $previousEquity = $equityCurve ? end($equityCurve)['equity'] : $capital;
            ($balance - $previousEquity) > 0 ? $wins++ : $losses++;
            $peakEquity = max($peakEquity, $balance);
            $maxDrawdown = max($maxDrawdown, ($peakEquity - $balance) / $peakEquity * 100);
            $equityCurve[] = ['time' => date('Y-m-d H:i', $candles[$exitIndex]['time'] / 1000), 'equity' => round($balance, 2)];
            $i = max($signal['formed_at'] + 1, $exitIndex + 1);
        }

        $results = $this->formatResults($balance, $capital, $wins, $losses, $maxDrawdown, $equityCurve);
        $results['total_trades'] = $tradeCount;
        $results['strategy_notes'] = 'USD-M futures OHLCV; hourly context uses a 20-hour SMA; local sweep lookback 12 bars; TP1 1.5R (50%), TP2 3R; assumed 0.04% fee per side. OI, delta, liquidation, session and funding filters are not included.';
        return $results;
    }

    private function hourlyBias(array $candles, int $index, string $timeframe): int
    {
        $hourCloses = [];
        $currentBucket = null;
        foreach ($candles as $barIndex => $bar) {
            if ($barIndex >= $index) break;
            $bucket = intdiv($bar['time'], 3600000);
            if ($currentBucket !== null && $bucket !== $currentBucket) $hourCloses[] = $lastClose;
            $currentBucket = $bucket;
            $lastClose = $bar['close'];
        }
        if ($currentBucket !== null) $hourCloses[] = $lastClose;
        if (count($hourCloses) < 21) return 0;
        $latest = end($hourCloses);
        $previous = $hourCloses[count($hourCloses) - 2];
        $sma = array_sum(array_slice($hourCloses, -20)) / 20;
        if ($latest > $sma && $latest > $previous) return 1;
        if ($latest < $sma && $latest < $previous) return -1;
        return 0;
    }

    private function findLiquidityFvgSignal(array $candles, int $index, int $direction): ?array
    {
        $impulseIndex = $index - 1;
        $priorIndex = $index - 2;
        $impulse = $candles[$impulseIndex];
        $range = $impulse['high'] - $impulse['low'];
        if ($range <= 0 || abs($impulse['close'] - $impulse['open']) / $range < 0.55) return null;
        if ($direction === 1 && $candles[$index]['low'] <= $candles[$priorIndex]['high']) return null;
        if ($direction === -1 && $candles[$index]['high'] >= $candles[$priorIndex]['low']) return null;

        $searchStart = max(12, $index - 6);
        for ($sweepIndex = $index - 2; $sweepIndex >= $searchStart; $sweepIndex--) {
            $priorBars = array_slice($candles, max(0, $sweepIndex - 12), 12);
            if (count($priorBars) < 12) continue;
            $sweep = $candles[$sweepIndex];
            $between = array_slice($candles, $sweepIndex + 1, $impulseIndex - $sweepIndex - 1);
            if (!$between) continue;
            if ($direction === 1) {
                $liquidity = min(array_column($priorBars, 'low'));
                $swept = $sweep['low'] < $liquidity && $sweep['close'] > $liquidity;
                $structureLevel = max(array_column($between, 'high'));
                $mss = $impulse['close'] > $structureLevel;
                // Bullish FVG: candle 1 high is below candle 3 low.
                $gapLow = $candles[$priorIndex]['high'];
                $gapHigh = $candles[$index]['low'];
                $stop = $sweep['low'];
            } else {
                $liquidity = max(array_column($priorBars, 'high'));
                $swept = $sweep['high'] > $liquidity && $sweep['close'] < $liquidity;
                $structureLevel = min(array_column($between, 'low'));
                $mss = $impulse['close'] < $structureLevel;
                // Bearish FVG: candle 1 low is above candle 3 high.
                $gapLow = $candles[$index]['high'];
                $gapHigh = $candles[$priorIndex]['low'];
                $stop = $sweep['high'];
            }
            if (!$swept || !$mss || $gapHigh <= $gapLow) continue;
            $entry = ($gapLow + $gapHigh) / 2;
            if (($direction === 1 && $stop >= $entry) || ($direction === -1 && $stop <= $entry)) continue;
            return ['formed_at' => $index, 'entry' => $entry, 'stop' => $stop];
        }
        return null;
    }

    private function formatResults(float $finalBalance, float $capital, int $wins, int $losses, float $maxDrawdown, array $equityCurve): array
    {
        $totalTrades = $wins + $losses;
        $sampledCurve = [];
        if (count($equityCurve) > 100) {
            $step = max(1, (int) floor(count($equityCurve) / 100));
            for ($i = 0; $i < count($equityCurve); $i += $step) $sampledCurve[] = $equityCurve[$i];
            if (end($sampledCurve) !== end($equityCurve)) $sampledCurve[] = end($equityCurve);
        } else $sampledCurve = $equityCurve;
        $netProfit = $finalBalance - $capital;
        return [
            'roi' => round(($netProfit / $capital) * 100, 2),
            'net_profit' => round($netProfit, 2),
            'winrate' => $totalTrades > 0 ? round(($wins / $totalTrades) * 100, 1) : 0,
            'max_drawdown' => round($maxDrawdown, 2),
            'equity_curve' => $sampledCurve,
            'total_trades' => $totalTrades,
        ];
    }
}
