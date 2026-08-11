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

Route::get('/admin/users', function () {
    return response()->json([
        ['id' => 1, 'name' => 'Alex Admin', 'email' => 'admin@example.com', 'role' => 'super_admin', 'createdAt' => '2025-01-10T12:00:00Z', '_count' => ['bots' => 12, 'trades' => 1400]],
        ['id' => 2, 'name' => 'Ivan Trader', 'email' => 'user@example.com', 'role' => 'user', 'createdAt' => '2026-03-15T08:30:00Z', '_count' => ['bots' => 4, 'trades' => 320]],
        ['id' => 3, 'name' => 'Support Sarah', 'email' => 'sarah@botforge.com', 'role' => 'admin', 'createdAt' => '2025-11-20T10:15:00Z', '_count' => ['bots' => 0, 'trades' => 0]],
        ['id' => 4, 'name' => 'Mike Crypto', 'email' => 'mike@crypto.com', 'role' => 'user', 'createdAt' => '2026-05-01T14:45:00Z', '_count' => ['bots' => 8, 'trades' => 890]],
        ['id' => 5, 'name' => 'Whale John', 'email' => 'john@whale.io', 'role' => 'user', 'createdAt' => '2026-06-10T09:00:00Z', '_count' => ['bots' => 25, 'trades' => 5600]],
    ]);
});

Route::patch('/admin/users/{id}/role', function () {
    return response()->json(['success' => true]);
});

Route::get('/history', function () {
    return response()->json([
        ['id' => '10482', 'pair' => 'BTC/USDT', 'type' => 'Покупка', 'amount' => 0.05, 'price' => 64200, 'createdAt' => '2026-07-28T14:30:00Z', 'status' => 'completed', 'profit' => 0],
        ['id' => '10481', 'pair' => 'ETH/USDT', 'type' => 'Продажа', 'amount' => 1.5, 'price' => 3450, 'createdAt' => '2026-07-28T10:15:00Z', 'status' => 'completed', 'profit' => 142.50],
        ['id' => '10480', 'pair' => 'SOL/USDT', 'type' => 'Покупка', 'amount' => 45, 'price' => 145.20, 'createdAt' => '2026-07-27T18:45:00Z', 'status' => 'completed', 'profit' => -12.40],
        ['id' => '10479', 'pair' => 'BTC/USDT', 'type' => 'Продажа', 'amount' => 0.1, 'price' => 63800, 'createdAt' => '2026-07-26T09:20:00Z', 'status' => 'completed', 'profit' => 340.00],
    ]);
});

Route::get('/apikeys', function () {
    return response()->json([
        ['id' => 1, 'exchange' => 'Binance', 'name' => 'Main Trading', 'lastUsed' => '2 часа назад'],
        ['id' => 2, 'exchange' => 'Bybit', 'name' => 'Test Net Bot', 'lastUsed' => '1 день назад'],
    ]);
});

Route::delete('/apikeys/{id}', function () {
    return response()->json(['success' => true]);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
