<?php

namespace App\Repository;

use App\Events\DeviceConsumptionUpdated;
use App\Models\DeviceConsumptionLog;

class DeviceConsumptionLogRepository
{
    /**
     * @throws \Exception
     */
    public function create(array $data): DeviceConsumptionLog
    {
        $log = new DeviceConsumptionLog();
        return $this->update($log, $data);
    }

    /**
     * @throws \Exception
     */
    public function update(DeviceConsumptionLog $log, array $data): DeviceConsumptionLog
    {
        $log->fill($data);
        if (!$log->save()) {
            throw new \Exception("Failed to update consumption log");
        }

        broadcast(new DeviceConsumptionUpdated(
            $log->consumption_value,
            $log->device_id,
            $log->device
            ->room
            ->floor
            ->school
            ->id,
        ));

        return $log;
    }
}
