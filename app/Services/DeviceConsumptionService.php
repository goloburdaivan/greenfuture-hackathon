<?php

namespace App\Services;

use App\Http\Requests\ConsumptionRequest;
use App\Repository\DeviceConsumptionLogRepository;
use App\Repository\DeviceRepository;

class DeviceConsumptionService
{
    public function __construct(
        private readonly DeviceConsumptionLogRepository $repository,
        private readonly DeviceRepository               $deviceRepository,
    )
    {
    }

    public function processConsumption(ConsumptionRequest $request): void
    {
        $data = $request->validated();
        $deviceId = $this->deviceRepository
            ->query()
            ->byHash($data['device_hash'])
            ->first()
            ->id;

        $this->repository->create([
            'device_id' => $deviceId,
            'consumption_value' => $data['consumption'],
        ]);
    }

}
