<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\BacktestEngine;
use Exception;

class BacktestController extends Controller
{
    public function run(Request $request, BacktestEngine $engine)
    {
        $request->validate([
            'pair' => 'required|string',
            'timeframe' => 'required|string',
            'strategy' => 'required|string',
            'capital' => 'required|numeric|min:1',
        ]);

        try {
            $results = $engine->run(
                $request->input('pair'),
                $request->input('timeframe'),
                $request->input('strategy'),
                $request->input('capital')
            );
            
            return response()->json([
                'success' => true,
                'data' => $results
            ]);
            
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 400);
        }
    }
}
