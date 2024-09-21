<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DeviceTaskController;
use App\Http\Controllers\FAQController;
use App\Http\Controllers\FloorRoomController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RoomDeviceController;
use App\Http\Controllers\SchoolController;
use App\Http\Controllers\SchoolFloorController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\Webhook\ConsumptionWebhookAction;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Support\Facades\Route;

Route::controller(AuthController::class)->group(function() {
    Route::get('/login', 'indexLogin')->name('login.index');
    Route::post('/login', 'login')->name('login')->withoutMiddleware(VerifyCsrfToken::class);
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

Route::controller(SchoolFloorController::class)->group(function() {
    Route::post('/schools/{school}/floors', 'create')
        ->name('schools.floors.store')
        ->middleware('auth');
});

Route::controller(FloorRoomController::class)->group(function() {
    Route::post('/floors/{floor}/rooms', 'create')
        ->name('schools.rooms.store')
        ->middleware('auth');
});

Route::controller(RoomDeviceController::class)->group(function() {
    Route::post('/rooms/{room}/devices', 'create')
        ->name('schools.devices.store')
        ->middleware('auth');
});

Route::controller(ShopController::class)->group(function() {
    Route::get('/shop', 'index')->name('shop.index');
});

Route::controller(DeviceTaskController::class)->group(function() {
    Route::post('/devices/{device}/task/complete', 'complete')
        ->name('devices.task.complete')
        ->middleware('auth');
});

Route::get('/faq', [FAQController::class, 'index'])->name('faq');

Route::post('/api/consumption/webhook', ConsumptionWebhookAction::class)
    ->withoutMiddleware(VerifyCsrfToken::class)
    ->withoutMiddleware('auth');
