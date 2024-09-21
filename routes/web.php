<?php

use App\Http\Controllers\AuthController;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Support\Facades\Route;

Route::controller(AuthController::class)->group(function() {
    Route::get('/login', 'indexLogin')->name('login.index');
    Route::post('/login', 'login')->name('login')->withoutMiddleware(VerifyCsrfToken::class);
    Route::get('/register', 'indexRegister')->name('register.index');
    Route::post('/register', 'register')->name('register')->withoutMiddleware(VerifyCsrfToken::class);
});

Route::get('/', function() {
    return response()->json([
        'message' => 'test',
    ]);
})->middleware('auth');
