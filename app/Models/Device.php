<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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
}
