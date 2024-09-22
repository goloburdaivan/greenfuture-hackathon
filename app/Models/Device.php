<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Device extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'device_hash',
        'room_id',
        'max_consumption',
    ];

    public function room(): BelongsTo
    {
        return $this->belongsTo(Room::class);
    }

    public function lastConsumption(): HasOne
    {
        return $this->hasOne(DeviceConsumptionLog::class)
            ->latestOfMany();
    }

    public function task(): HasOne
    {
        return $this->hasOne(DeviceTask::class)
            ->where('completed', false)
            ->latestOfMany();
    }
}
