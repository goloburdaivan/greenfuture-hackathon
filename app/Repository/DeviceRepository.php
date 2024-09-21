<?php

namespace App\Repository;

use App\Models\Device;
use App\Repository\QueryBuilders\DeviceQueryBuilder;

class DeviceRepository
{
    public function create(array $data): Device {
        $device = new Device();
        return $this->update($device, $data);
    }

    public function update(Device $device, array $data): Device {
        $device->fill($data);
        if (!$device->save()) {
            throw new \Exception("Failed to update device");
        }

        return $device;
    }

    public function query(): DeviceQueryBuilder
    {
        return new DeviceQueryBuilder();
    }
}
