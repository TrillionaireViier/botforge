<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;

Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/auth/register', [AuthController::class, 'register']);

Route::get('/test-deploy', function () {
    return 'deploy-success-123';
});

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
