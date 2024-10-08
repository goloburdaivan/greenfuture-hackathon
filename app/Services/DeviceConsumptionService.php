<?php

namespace App\Services;

use App\Events\DeviceConsumptionUpdated;
use App\Http\Requests\ConsumptionRequest;
use App\Repository\DeviceConsumptionLogRepository;
use App\Repository\DeviceRepository;
use App\Repository\DeviceTaskRepository;

class DeviceConsumptionService
{
    public function __construct(
        private readonly DeviceConsumptionLogRepository $repository,
        private readonly DeviceRepository               $deviceRepository,
        private readonly DeviceTaskRepository $deviceTaskRepository,
    )
    {
    }

    public function processConsumption(ConsumptionRequest $request): void
    {
        $data = $request->validated();
        $device = $this->deviceRepository
            ->query()
            ->byHash($data['device_hash'])
            ->first();

        $log = $this->repository->create([
            'device_id' => $device->id,
            'consumption_value' => $data['consumption'],
        ]);

        if ($data['consumption'] > $device->max_consumption) {
            $this->deviceTaskRepository->create([
                'device_id' => $device->id,
            ]);

            broadcast(new DeviceConsumptionUpdated(
                $log->consumption_value,
                $log->device_id,
                $log->device
                    ->room
                    ->floor
                    ->school
                    ->id,
            ));
        }
    }

}
