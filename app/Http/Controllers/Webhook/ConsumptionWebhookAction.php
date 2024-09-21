<?php

namespace App\Http\Controllers\Webhook;

use App\Http\Controllers\Controller;
use App\Http\Requests\ConsumptionRequest;
use App\Services\DeviceConsumptionService;

class ConsumptionWebhookAction extends Controller
{
    public function __construct(
        private readonly DeviceConsumptionService $service,
    ) {
    }

    public function __invoke(ConsumptionRequest $request): void
    {
        $this->service->processConsumption($request);
    }
}
