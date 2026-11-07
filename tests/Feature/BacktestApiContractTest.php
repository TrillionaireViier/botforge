<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class BacktestApiContractTest extends TestCase
{
    public function test_request_validation_rejects_missing_required_inputs_and_unsupported_timeframe(): void
    {
        Http::fake();

        $this->postJson('/api/backtest', [
            'timeframe' => '1h',
            'strategy' => 'MA Crossover',
            'capital' => 1000,
        ])->assertStatus(422)->assertJsonValidationErrors(['pair']);

        $this->postJson('/api/backtest', [
            'pair' => 'BTC/USDT',
            'timeframe' => '2h',
            'strategy' => 'MA Crossover',
            'capital' => 1000,
        ])->assertStatus(422)->assertJsonValidationErrors(['timeframe']);

        $this->postJson('/api/backtest', [
            'pair' => 'BTC/USDT',
            'timeframe' => '1h',
            'strategy' => 'MA Crossover',
            'capital' => 0,
        ])->assertStatus(422)->assertJsonValidationErrors(['capital']);

        Http::assertNothingSent();
    }

    public function test_api_returns_stable_json_contract_for_ma_backtest_with_no_signals(): void
    {
        Http::fake([
            'data-api.binance.vision/api/v3/klines*' => Http::response($this->flatSpotCandles(), 200),
        ]);

        $response = $this->postJson('/api/backtest', [
            'pair' => 'BTC/USDT',
            'timeframe' => '1h',
            'strategy' => 'MA Crossover',
            'capital' => 10000,
        ]);

        $response->assertOk()
            ->assertJsonPath('success', true)
            ->assertJsonStructure(['success', 'data' => ['roi', 'net_profit', 'winrate', 'max_drawdown', 'equity_curve', 'total_trades']])
            ->assertJsonPath('data.roi', 0)
            ->assertJsonPath('data.net_profit', 0)
            ->assertJsonPath('data.winrate', 0)
            ->assertJsonPath('data.max_drawdown', 0)
            ->assertJsonPath('data.total_trades', 0);

        $curve = $response->json('data.equity_curve');
        $this->assertCount(30, $curve);
        $this->assertSame(10000.0, $curve[0]['equity']);
        $this->assertSame(10000.0, $curve[29]['equity']);
    }

    public function test_api_returns_a_consistent_json_error_when_strategy_service_rejects_parameters(): void
    {
        Http::fake();

        $response = $this->postJson('/api/backtest', [
            'pair' => 'BTC/USDT',
            'timeframe' => '1h',
            'strategy' => 'Liquidity Sweep + FVG Reversal',
            'capital' => 10000,
        ]);

        $response->assertStatus(400)
            ->assertJsonStructure(['success', 'message'])
            ->assertJsonPath('success', false)
            ->assertJsonPath('message', 'Для Liquidity Sweep + FVG выберите таймфрейм исполнения 5m или 15m.');
        Http::assertNothingSent();
    }

    private function flatSpotCandles(): array
    {
        $candles = [];
        $start = 1700000000000;
        for ($i = 0; $i < 30; $i++) {
            $time = $start + ($i * 3600000);
            $candles[] = [$time, '100.00', '101.00', '99.00', '100.00', '10.00'];
        }
        return $candles;
    }
}
