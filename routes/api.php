<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Api\TradingController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::post('/backtest', [\App\Http\Controllers\BacktestController::class, 'run']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/logout', [AuthController::class, 'logout']);

    // Trading API Routes
    Route::get('/trading/keys', [TradingController::class, 'getKeys']);
    Route::post('/trading/keys', [TradingController::class, 'saveKeys']);
    Route::get('/trading/balance', [TradingController::class, 'getBalance']);
    Route::post('/trading/order', [TradingController::class, 'placeOrder']);

    // Billing API Routes
    Route::post('/billing/cryptomus', [\App\Http\Controllers\Api\BillingController::class, 'payWithCryptomus']);
    Route::post('/billing/whitebit', [\App\Http\Controllers\Api\BillingController::class, 'payWithWhitebit']);
});

Route::get('/admin/users', [AdminController::class, 'getUsers']);
Route::get('/admin/bots', [AdminController::class, 'getBots']);
Route::get('/admin/trades', [AdminController::class, 'getTrades']);
Route::get('/admin/tickets', [AdminController::class, 'getTickets']);
Route::get('/admin/settings', [AdminController::class, 'getSettings']);
Route::post('/admin/settings', [AdminController::class, 'updateSettings']);
Route::get('/admin/integrations', [AdminController::class, 'getIntegrations']);
Route::get('/admin/payouts', [AdminController::class, 'getPayouts']);
Route::get('/admin/leads', [AdminController::class, 'getLeads']);
Route::get('/admin/articles', [AdminController::class, 'getArticles']);
Route::get('/admin/promocodes', [AdminController::class, 'getPromocodes']);

Route::patch('/admin/users/{id}/role', function () {
    return response()->json(['success' => true]);
});

Route::get('/bots', function () {
    return response()->json([
        ['id' => 1, 'name' => 'Alpha Scalp', 'strategy' => 'scalping', 'pair' => 'BTC/USDT', 'invested' => 1500, 'profit' => 124.50, 'status' => 'active'],
        ['id' => 2, 'name' => 'Safe DCA', 'strategy' => 'dca', 'pair' => 'ETH/USDT', 'invested' => 3000, 'profit' => -45.20, 'status' => 'active'],
        ['id' => 3, 'name' => 'Grid Master', 'strategy' => 'grid', 'pair' => 'SOL/USDT', 'invested' => 5000, 'profit' => 840.10, 'status' => 'active'],
        ['id' => 4, 'name' => 'Arb Sniper', 'strategy' => 'arbitrage', 'pair' => 'XRP/USDT', 'invested' => 800, 'profit' => 12.30, 'status' => 'paused']
    ]);
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
