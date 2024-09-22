<?php

namespace App\Repository;

use App\Models\StoreItem;
use Illuminate\Database\Eloquent\Collection;

class ShopItemRepository
{
    public function all(): Collection
    {
        return StoreItem::query()->get();
    }
}
