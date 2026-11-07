<?php

namespace App\Http\Controllers;

use App\Services\BacktestEngine;
use Exception;
use Illuminate\Http\Request;

class BacktestController extends Controller
{
    public function run(Request $request, BacktestEngine $engine)
    {
        $validated = $request->validate([
            'pair' => 'required|string|max:30',
            'timeframe' => 'required|string|in:1m,5m,15m,1h,4h,1d',
            'strategy' => 'required|string|max:100',
            'capital' => 'required|numeric|min:1',
            'risk_percent' => 'sometimes|numeric|min:0.5|max:1',
        ]);

        try {
            $results = $engine->run(
                $validated['pair'],
                $validated['timeframe'],
                $validated['strategy'],
                (float) $validated['capital'],
                (float) ($validated['risk_percent'] ?? 0.5)
            );

            return response()->json(['success' => true, 'data' => $results]);
        } catch (Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()], 400);
        }
    }
}
