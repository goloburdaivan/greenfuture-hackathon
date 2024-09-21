<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateRoomRequest;
use App\Models\Floor;
use App\Services\RoomService;
use Illuminate\Http\RedirectResponse;

class FloorRoomController extends Controller
{
    public function __construct(
        private readonly RoomService $roomService,
    ) {
    }

    public function create(Floor $floor, CreateRoomRequest $request): RedirectResponse
    {
        $this->roomService->create($floor, $request);
        return redirect()->route('schools.show', [
            'school' => $floor->school->id,
        ]);
    }
}
