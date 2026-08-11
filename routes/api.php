<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BacktestController;

Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/auth/register', [AuthController::class, 'register']);

Route::post('/backtest', [BacktestController::class, 'run']);

Route::get('/bots', function () {
    return response()->json([
        ['id' => 1, 'name' => 'Alpha Scalp', 'strategy' => 'scalping', 'pair' => 'BTC/USDT', 'invested' => 1500, 'profit' => 124.50, 'status' => 'active'],
        ['id' => 2, 'name' => 'Safe DCA', 'strategy' => 'dca', 'pair' => 'ETH/USDT', 'invested' => 3000, 'profit' => -45.20, 'status' => 'active'],
        ['id' => 3, 'name' => 'Grid Master', 'strategy' => 'grid', 'pair' => 'SOL/USDT', 'invested' => 5000, 'profit' => 840.10, 'status' => 'active'],
        ['id' => 4, 'name' => 'Arb Sniper', 'strategy' => 'arbitrage', 'pair' => 'XRP/USDT', 'invested' => 800, 'profit' => 12.30, 'status' => 'paused']
    ]);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
