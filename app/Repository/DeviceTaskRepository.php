<?php

namespace App\Repository;

use App\Models\DeviceTask;
use App\Repository\QueryBuilders\DeviceTaskQuery;

class DeviceTaskRepository
{
    /**
     * @throws \Exception
     */
    public function create(array $data): ?DeviceTask
    {
        $createdTask = $this->query()
            ->byDeviceId($data['device_id'])
            ->notCompleted()
            ->first();

        if ($createdTask) {
            return null;
        }

        $task = new DeviceTask();
        return $this->update($task, $data);
    }

    public function update(DeviceTask $task, array $data): ?DeviceTask
    {
        $task->fill($data);
        if (!$task->save()) {
            throw new \Exception("Failed to update device task");
        }

        return $task;
    }

    public function query(): DeviceTaskQuery
    {
        return new DeviceTaskQuery();
    }
}
