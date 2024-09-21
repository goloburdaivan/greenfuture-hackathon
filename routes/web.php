<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SchoolController;
use Illuminate\Support\Facades\Route;

Route::controller(AuthController::class)->group(function() {
    Route::get('/login', 'indexLogin')->name('login.index');
    Route::post('/login', 'login')->name('login')->withoutMiddleware(\Illuminate\Foundation\Http\Middleware\VerifyCsrfToken::class);
    Route::get('/register', 'indexRegister')->name('register.index');
    Route::post('/register', 'register')->name('register');
});

Route::controller(HomeController::class)->group(function() {
    Route::get('/', 'index')
        ->name('user.home')
        ->middleware('auth');
});

Route::controller(SchoolController::class)->group(function() {
    Route::post('/schools', 'store')->name('schools.store');
    Route::get('/schools/{school}', 'show')->name('schools.show');
});
