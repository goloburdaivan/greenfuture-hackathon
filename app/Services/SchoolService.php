<?php

namespace App\Services;

use App\Http\Requests\CreateSchoolRequest;
use App\Models\School;
use App\Models\User;
use App\Repository\SchoolRepository;

class SchoolService
{
    public function __construct(
        private readonly SchoolRepository $repository,
    ) {
    }

    public function create(User $user, CreateSchoolRequest $request): School
    {
        return $this->repository->create($request->validated() + [
            'user_id' => $user->id,
        ]);
    }

    public function getSchoolData(int $schoolId): ?School
    {
        return $this->repository
            ->query()
            ->byId($schoolId)
            ->loadRelations([
                'floors',
                'floors.rooms',
                'floors.rooms.devices',
            ])
            ->first();
    }
}
