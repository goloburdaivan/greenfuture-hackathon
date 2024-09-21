<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeviceTask extends Model
{
    use HasFactory;

    protected $fillable = [
        'image_url',
        'completed',
        'device_id',
    ];

    protected $casts = [
        'completed' => 'bool',
    ];
}
