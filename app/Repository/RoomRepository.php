<?php

namespace App\Repository;

use App\Models\Room;

class RoomRepository
{
    public function create(array $data): Room {
        $room = new Room();
        return $this->update($room, $data);
    }

    public function update(Room $room, array $data): Room {
        $room->fill($data);
        if (!$room->save()) {
            throw new \Exception("Failed to update room");
        }

        return $room;
    }
}
