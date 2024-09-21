<?php

namespace App\Console\Commands;

use App\Jobs\SendConsumptionStubRequest;
use Illuminate\Console\Command;

class ConsumptionRequestStubCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:consumption';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sends stub request to webhook';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        SendConsumptionStubRequest::dispatch();
    }
}
