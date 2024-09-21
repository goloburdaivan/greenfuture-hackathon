<?php

namespace App\Services;

use App\Http\Requests\CreateDeviceRequest;
use App\Models\Device;
use App\Models\Room;
use App\Repository\DeviceRepository;

class DeviceService
{
    public function __construct(
        private readonly DeviceRepository $repository,
    ) {
    }

    public function create(Room $room, CreateDeviceRequest $request): Device
    {
        return $this->repository->create($request->validated() + [
            'room_id' => $room->id,
        ]);
    }

}
