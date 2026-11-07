<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class MovingAverageBacktestTest extends TestCase
{
    public function test_ma_crossover_backtest_closes_profitable_trade_and_returns_consistent_metrics(): void
    {
        Http::fake(['data-api.binance.vision/api/v3/klines*' => Http::response($this->trendCandles([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 140, 139, 138, 137, 136, 135, 134, 133, 132, 131, 130, 129, 128, 127, 126, 125, 124, 123, 122]), 200)]);

        $response = $this->postJson('/api/backtest', [
            'pair' => 'BTC/USDT', 'timeframe' => '1h', 'strategy' => 'MA Crossover', 'capital' => 10000,
        ]);

        $response->assertOk()->assertJsonPath('success', true)->assertJsonPath('data.total_trades', 1);
        $this->assertGreaterThan(0, $response->json('data.net_profit'));
        $this->assertSame(100.0, $response->json('data.winrate'));
        $this->assertGreaterThan(0, count($response->json('data.equity_curve')));
        Http::assertSent(fn ($request) => str_contains($request->url(), 'data-api.binance.vision/api/v3/klines')
            && $request['symbol'] === 'BTCUSDT' && $request['interval'] === '1h');
    }

    public function test_ma_crossover_backtest_reports_a_loss_for_a_reversal_after_entry(): void
    {
        $closes = array_merge(array_fill(0, 40, 100), range(101, 112), range(111, 70));
        Http::fake(['data-api.binance.vision/api/v3/klines*' => Http::response($this->trendCandles($closes), 200)]);

        $response = $this->postJson('/api/backtest', [
            'pair' => 'ETH/USDT', 'timeframe' => '1h', 'strategy' => 'MA Crossover', 'capital' => 5000,
        ]);

        $response->assertOk()->assertJsonPath('data.total_trades', 1);
        $this->assertLessThan(0, $response->json('data.net_profit'));
        $this->assertSame(0.0, $response->json('data.winrate'));
    }

    private function trendCandles(array $closes): array
    {
        $start = 1700000000000;
        return array_map(static function ($close, $i) use ($start) {
            $close = (float) $close;
            return [$start + ($i * 3600000), (string) $close, (string) ($close + 0.8), (string) ($close - 0.8), (string) $close, '125.4'];
        }, $closes, array_keys($closes));
    }
}
