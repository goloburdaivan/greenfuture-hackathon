<?php

namespace App\Repository\QueryBuilders;

use App\Models\Device;
use Illuminate\Database\Eloquent\Builder;

class DeviceQueryBuilder
{
    private Builder $query;

    public function __construct()
    {
        $this->query = Device::query();
    }

    public function byHash(string $hash): self
    {
        $this->query->where('device_hash', $hash);
        return $this;
    }

    public function first(): ?Device
    {
        return $this->query->first();
    }
}
