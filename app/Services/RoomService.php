<?php

namespace App\Services;

use App\Http\Requests\CreateRoomRequest;
use App\Models\Floor;
use App\Models\Room;
use App\Repository\RoomRepository;

class RoomService
{
    public function __construct(
        private readonly RoomRepository $repository,
    ) {
    }

    public function create(Floor $floor, CreateRoomRequest $request): Room
    {
        return $this->repository->create($request->validated() + [
            'floor_id' => $floor->id,
        ]);
    }
}
