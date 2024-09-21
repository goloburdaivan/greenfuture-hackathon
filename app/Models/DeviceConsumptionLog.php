<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DeviceConsumptionLog extends Model
{
    use HasFactory;

    protected $table = 'device_consumption_logs';

    protected $fillable = [
        'consumption_value',
        'device_id',
    ];

    public function device(): BelongsTo
    {
        return $this->belongsTo(Device::class);
    }
}
