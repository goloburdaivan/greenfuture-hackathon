<?php

namespace App\Integrations;

use Illuminate\Support\Facades\Http;

class TelegramClient
{
    public function sendMessage(string $message)
    {
        Http::get(config('telegram.bot_url') . '/sendMessage', [
            'chat_id' => '813682745',
            'text' => $message ,
        ]);
    }
}
