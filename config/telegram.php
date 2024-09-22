<?php

return [
    'base_url' => env('TELEGRAM_BASE_URL'),
    'token' => env('TELEGRAM_API_TOKEN'),
    'bot_url' => env('TELEGRAM_BASE_URL') . env('TELEGRAM_API_TOKEN'),
];
