<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateFloorRequest;
use App\Models\School;
use App\Services\FloorService;
use Illuminate\Http\RedirectResponse;

class SchoolFloorController extends Controller
{
    public function __construct(
        private readonly FloorService $floorService,
    ) {
    }

    public function create(School $school, CreateFloorRequest $request): RedirectResponse
    {
        $this->floorService->create($school, $request);
        return redirect()->route('schools.show', [
            'school' => $school->id,
        ]);
    }
}
