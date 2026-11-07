<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class LiquidityFvgBacktestTest extends TestCase
{
    private const STRATEGY = 'Liquidity Sweep + FVG Reversal';

    public function test_liquidity_fvg_backtest_uses_futures_candles_and_returns_strategy_metrics(): void
    {
        Http::fake([
            'fapi.binance.com/fapi/v1/klines*' => Http::response($this->flatCandles(), 200),
        ]);

        $response = $this->postJson('/api/backtest', [
            'pair' => 'BTC/USDT',
            'timeframe' => '15m',
            'strategy' => self::STRATEGY,
            'capital' => 10000,
            'risk_percent' => 0.5,
        ]);

        $response->assertOk()
            ->assertJsonPath('success', true)
            ->assertJsonPath('data.total_trades', 0)
            ->assertJsonPath('data.roi', 0)
            ->assertJsonPath('data.net_profit', 0)
            ->assertJsonPath('data.winrate', 0)
            ->assertJsonPath('data.max_drawdown', 0)
            ->assertJsonStructure(['data' => ['equity_curve', 'strategy_notes']]);

        Http::assertSent(fn ($request) =>
            str_contains($request->url(), 'fapi.binance.com/fapi/v1/klines')
            && $request['symbol'] === 'BTCUSDT'
            && $request['interval'] === '15m'
            && $request['limit'] === 1000
        );
    }

    public function test_liquidity_fvg_backtest_rejects_non_execution_timeframe(): void
    {
        Http::fake();

        $this->postJson('/api/backtest', [
            'pair' => 'BTC/USDT',
            'timeframe' => '1h',
            'strategy' => self::STRATEGY,
            'capital' => 10000,
        ])->assertStatus(400)
          ->assertJsonPath('success', false)
          ->assertJsonPath('message', 'Для Liquidity Sweep + FVG выберите таймфрейм исполнения 5m или 15m.');

        Http::assertNothingSent();
    }

    public function test_liquidity_fvg_backtest_rejects_risk_outside_configured_range(): void
    {
        Http::fake();

        $this->postJson('/api/backtest', [
            'pair' => 'ETH/USDT',
            'timeframe' => '5m',
            'strategy' => self::STRATEGY,
            'capital' => 10000,
            'risk_percent' => 1.5,
        ])->assertStatus(422);

        Http::assertNothingSent();
    }

    public function test_liquidity_fvg_backtest_returns_error_when_futures_data_is_unavailable(): void
    {
        Http::fake([
            'fapi.binance.com/fapi/v1/klines*' => Http::response(['msg' => 'service unavailable'], 503),
        ]);

        $this->postJson('/api/backtest', [
            'pair' => 'ETH/USDT',
            'timeframe' => '5m',
            'strategy' => self::STRATEGY,
            'capital' => 10000,
        ])->assertStatus(400)
          ->assertJsonPath('success', false)
          ->assertJsonPath('message', 'Не удалось получить исторические фьючерсные свечи. Проверьте торговую пару и повторите позже.');
    }

    public function test_liquidity_fvg_backtest_requires_enough_historical_candles(): void
    {
        Http::fake([
            'fapi.binance.com/fapi/v1/klines*' => Http::response(array_slice($this->flatCandles(), 0, 100), 200),
        ]);

        $this->postJson('/api/backtest', [
            'pair' => 'BTC/USDT',
            'timeframe' => '5m',
            'strategy' => self::STRATEGY,
            'capital' => 10000,
        ])->assertStatus(400)
          ->assertJsonPath('success', false)
          ->assertJsonPath('message', 'Недостаточно исторических свечей для расчёта 1H-контекста и FVG-сетапов.');
    }

    private function flatCandles(): array
    {
        $candles = [];
        $start = 1700000000000;
        for ($i = 0; $i < 300; $i++) {
            $time = $start + ($i * 15 * 60 * 1000);
            $candles[] = [$time, '100.00', '101.00', '99.00', '100.00', '10.00'];
        }
        return $candles;
    }
}
