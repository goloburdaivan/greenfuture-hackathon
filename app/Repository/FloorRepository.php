<?php

namespace App\Repository;

use App\Models\Floor;

class FloorRepository
{
    public function create(array $data): Floor {
        $floor = new Floor();
        return $this->update($floor, $data);
    }

    public function update(Floor $floor, array $data): Floor {
        $floor->fill($data);
        if (!$floor->save()) {
            throw new \Exception("Failed to update floor");
        }

        return $floor;
    }
}
