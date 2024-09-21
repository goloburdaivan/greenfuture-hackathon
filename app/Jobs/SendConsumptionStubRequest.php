<?php

namespace App\Jobs;

use App\Models\Device;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Http;

class SendConsumptionStubRequest implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $randomDevice = Device::query()->inRandomOrder()->first();

        $consumption = rand(1000, 1200);

        Http::post('http://localhost:8000/api/consumption/webhook', [
            'device_hash' => $randomDevice->device_hash,
            'consumption' => $consumption,
        ]);
    }
}
