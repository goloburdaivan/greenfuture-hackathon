<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::controller(AuthController::class)->group(function() {
    Route::get('/login', 'indexLogin')->name('login.index');
    Route::post('/login', 'login')->name('login');
    Route::get('/register', 'indexRegister')->name('register.index');
    Route::post('/register', 'register')->name('register');
});

Route::controller(HomeController::class)->group(function() {
    Route::get('/', 'index')
        ->name('user.home')
        ->middleware('auth');
});
