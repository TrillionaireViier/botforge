<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class BacktestEngine
{
    public function run(string $pair, string $timeframe, string $strategy, float $capital)
    {
        // 1. Format the symbol for Binance (e.g. BTC/USDT -> BTCUSDT)
        $symbol = str_replace('/', '', strtoupper($pair));

        // 2. Map frontend timeframes to Binance intervals
        $intervalMap = [
            '1h' => '1h',
            '4h' => '4h',
            '1d' => '1d'
        ];
        $interval = $intervalMap[$timeframe] ?? '1h';

        // 3. Fetch KLINES (up to 1000 candles) from Binance Data API (avoids Vercel/US IP blocks)
        $response = Http::get("https://data-api.binance.vision/api/v3/klines", [
            'symbol' => $symbol,
            'interval' => $interval,
            'limit' => 1000
        ]);

        if ($response->failed()) {
            throw new \Exception('Failed to fetch historical data from Binance API for ' . $symbol);
        }

        $klines = $response->json();
        
        // 4. Simulate a simple Moving Average Crossover strategy (as a baseline for all bots)
        // This generates dynamic, realistic results based on real historical data.
        
        $balance = $capital;
        $position = 0; // 0 = no position, > 0 = amount of asset holding
        $buyPrice = 0;
        
        $wins = 0;
        $losses = 0;
        
        $peakEquity = $capital;
        $maxDrawdown = 0;
        
        $equityCurve = [];
        
        // Moving Average arrays
        $closes = [];
        $maFastPeriod = 9;
        $maSlowPeriod = 21;

        foreach ($klines as $kline) {
            $timestamp = $kline[0]; // Open time
            $closePrice = (float)$kline[4];
            
            $closes[] = $closePrice;
            
            // Need enough data for MAs
            if (count($closes) > $maSlowPeriod) {
                // Calculate MAs
                $fastSlice = array_slice($closes, -$maFastPeriod);
                $slowSlice = array_slice($closes, -$maSlowPeriod);
                
                $maFast = array_sum($fastSlice) / count($fastSlice);
                $maSlow = array_sum($slowSlice) / count($slowSlice);
                
                $prevFastSlice = array_slice($closes, -$maFastPeriod - 1, $maFastPeriod);
                $prevSlowSlice = array_slice($closes, -$maSlowPeriod - 1, $maSlowPeriod);
                
                $prevMaFast = array_sum($prevFastSlice) / count($prevFastSlice);
                $prevMaSlow = array_sum($prevSlowSlice) / count($prevSlowSlice);
                
                // Crossover Logic
                $crossUp = ($prevMaFast <= $prevMaSlow) && ($maFast > $maSlow);
                $crossDown = ($prevMaFast >= $prevMaSlow) && ($maFast < $maSlow);
                
                if ($crossUp && $position == 0) {
                    // BUY (using 99% of balance to account for fake fees)
                    $buyPrice = $closePrice;
                    $position = ($balance * 0.99) / $buyPrice;
                    $balance = 0;
                } elseif ($crossDown && $position > 0) {
                    // SELL
                    $sellValue = $position * $closePrice * 0.99; // 1% simulated fee/slippage
                    $profit = $sellValue - ($position * $buyPrice);
                    
                    if ($profit > 0) {
                        $wins++;
                    } else {
                        $losses++;
                    }
                    
                    $balance = $sellValue;
                    $position = 0;
                }
            }
            
            // Track Equity
            $currentEquity = $balance + ($position * $closePrice);
            
            if ($currentEquity > $peakEquity) {
                $peakEquity = $currentEquity;
            }
            
            $drawdown = ($peakEquity - $currentEquity) / $peakEquity * 100;
            if ($drawdown > $maxDrawdown) {
                $maxDrawdown = $drawdown;
            }
            
            // We can just format the timestamp for the chart
            $equityCurve[] = [
                'time' => date('Y-m-d H:i', $timestamp / 1000),
                'equity' => round($currentEquity, 2)
            ];
        }

        // Close any open position at the end
        if ($position > 0) {
            $currentEquity = $position * $closePrice;
            $profit = $currentEquity - ($position * $buyPrice);
            if ($profit > 0) {
                $wins++;
            } else {
                $losses++;
            }
            $balance = $currentEquity;
        }
        
        $finalEquity = round($balance, 2);
        $netProfit = $finalEquity - $capital;
        $roi = ($netProfit / $capital) * 100;
        $totalTrades = $wins + $losses;
        $winrate = $totalTrades > 0 ? ($wins / $totalTrades) * 100 : 0;
        
        // Downsample equity curve to max 100 points to prevent chart lag
        $sampledCurve = [];
        $step = max(1, floor(count($equityCurve) / 100));
        for ($i = 0; $i < count($equityCurve); $i += $step) {
            $sampledCurve[] = $equityCurve[$i];
        }
        
        return [
            'roi' => round($roi, 2),
            'net_profit' => round($netProfit, 2),
            'winrate' => round($winrate, 1),
            'max_drawdown' => round($maxDrawdown, 2),
            'equity_curve' => $sampledCurve,
            'total_trades' => $totalTrades
        ];
    }
}
