<?php

namespace App\Services;

use App\Http\Requests\CreateFloorRequest;
use App\Models\Floor;
use App\Models\School;
use App\Repository\FloorRepository;

class FloorService
{
    public function __construct(
        private readonly FloorRepository $repository,
    ) {
    }

    public function create(School $school, CreateFloorRequest $request): Floor
    {
        $data = $request->validated();
        return $this->repository->create($data + [
            'school_id' => $school->id,
       ]);
    }
}
