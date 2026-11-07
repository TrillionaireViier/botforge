<?php

namespace Tests\Unit;

use App\Services\BacktestEngine;
use PHPUnit\Framework\TestCase;
use ReflectionMethod;

class BacktestEngineSignalTest extends TestCase
{
    public function test_it_detects_bullish_sweep_mss_and_fvg_with_midpoint_entry_and_sweep_stop(): void
    {
        $candles = $this->baseCandles();
        $candles[16] = $this->bar(101, 102, 98, 101.5); // Sweep below prior lows, close back above.
        $candles[17] = $this->bar(101.5, 102, 101, 101.8);
        $candles[18] = $this->bar(101.8, 102, 101.5, 101.9); // Candle 1 high = 102.
        $candles[19] = $this->bar(102, 106, 101, 105); // Strong bullish displacement / MSS.
        $candles[20] = $this->bar(105, 107, 103, 106); // Candle 3 low = 103, bullish FVG [102,103].

        $signal = $this->invokeSignal($candles, 20, 1);

        $this->assertSame(20, $signal['formed_at']);
        $this->assertEqualsWithDelta(102.5, $signal['entry'], 0.0001);
        $this->assertEqualsWithDelta(98, $signal['stop'], 0.0001);
    }

    public function test_it_detects_bearish_sweep_mss_and_fvg(): void
    {
        $candles = $this->baseCandles();
        $candles[16] = $this->bar(99, 103, 98, 98.5); // Buy-side sweep, closes below prior highs.
        $candles[17] = $this->bar(98.5, 99, 98, 98.2);
        $candles[18] = $this->bar(98.2, 98.5, 97, 98); // Candle 1 low = 97.
        $candles[19] = $this->bar(98, 98.5, 94, 94.5); // Strong bearish displacement / MSS.
        $candles[20] = $this->bar(94.5, 96, 93, 94); // Candle 3 high = 96, bearish FVG [96,97].

        $signal = $this->invokeSignal($candles, 20, -1);

        $this->assertSame(20, $signal['formed_at']);
        $this->assertEqualsWithDelta(96.5, $signal['entry'], 0.0001);
        $this->assertEqualsWithDelta(103, $signal['stop'], 0.0001);
    }

    public function test_it_rejects_an_impulse_without_a_three_candle_fvg(): void
    {
        $candles = $this->baseCandles();
        $candles[16] = $this->bar(101, 102, 98, 101.5);
        $candles[17] = $this->bar(101.5, 102, 101, 101.8);
        $candles[18] = $this->bar(101.8, 104, 101.5, 101.9);
        $candles[19] = $this->bar(102, 106, 101, 105);
        $candles[20] = $this->bar(105, 107, 101, 106); // Candle 3 overlaps candle 1: no FVG.

        $this->assertNull($this->invokeSignal($candles, 20, 1));
    }

    private function invokeSignal(array $candles, int $index, int $direction): ?array
    {
        $method = new ReflectionMethod(BacktestEngine::class, 'findLiquidityFvgSignal');
        return $method->invoke(new BacktestEngine(), $candles, $index, $direction);
    }

    private function baseCandles(): array
    {
        $candles = [];
        for ($i = 0; $i < 25; $i++) $candles[] = $this->bar(100, 102, 99, 100.5);
        return $candles;
    }

    private function bar(float $open, float $high, float $low, float $close): array
    {
        return ['time' => 1700000000000, 'open' => $open, 'high' => $high, 'low' => $low, 'close' => $close, 'volume' => 100];
    }
}
