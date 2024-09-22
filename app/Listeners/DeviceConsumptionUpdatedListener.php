<?php

namespace App\Listeners;

use App\Events\DeviceConsumptionUpdated;
use App\Integrations\TelegramClient;
use Illuminate\Contracts\Queue\ShouldQueue;

class DeviceConsumptionUpdatedListener implements ShouldQueue
{
    /**
     * Create the event listener.
     */
    public function __construct(
        private readonly TelegramClient $client,
    ) {
    }

    /**
     * Handle the event.
     */
    public function handle(DeviceConsumptionUpdated $event): void
    {
        $this->client->sendMessage(view('telegram.notification', [
            'device_id' => $event->deviceId,
            'school_url' => route('schools.show', [
                'school' => $event->schoolId,
            ])
        ])->render());
    }
}
