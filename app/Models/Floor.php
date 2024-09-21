<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Floor extends Model
{
    use HasFactory;

    protected $fillable = [
        'number',
        'school_id',
    ];

    public function rooms(): HasMany
    {
        return $this->hasMany(Room::class);
    }
}
