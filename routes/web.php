<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;

Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/auth/register', [AuthController::class, 'register']);

Route::post('/backtest', [\App\Http\Controllers\BacktestController::class, 'run']);

Route::get('/test-deploy', function () {
    return 'deploy-success-123';
});

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
