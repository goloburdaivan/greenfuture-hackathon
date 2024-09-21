<?php

namespace App\Repository\QueryBuilders;

use App\Models\DeviceTask;
use Illuminate\Database\Eloquent\Builder;

class DeviceTaskQuery
{
    private Builder $query;

    public function __construct()
    {
        $this->query = DeviceTask::query();
    }

    public function byDeviceId(int $deviceId): self
    {
        $this->query->where('device_id', $deviceId);
        return $this;
    }

    public function notCompleted(): self
    {
        $this->query->where('completed', false);
        return $this;
    }

    public function first(): ?DeviceTask
    {
        return $this->query->first();
    }
}
