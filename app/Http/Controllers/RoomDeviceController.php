<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateDeviceRequest;
use App\Models\Room;
use App\Services\DeviceService;
use Illuminate\Http\RedirectResponse;

class RoomDeviceController extends Controller
{
    public function __construct(
        private readonly DeviceService $service,
    ) {
    }

    public function create(Room $room, CreateDeviceRequest $request): RedirectResponse
    {
        $this->service->create($room, $request);
        return redirect()->route('schools.show', [
            'school' => $room->floor->school->id,
        ]);
    }
}
