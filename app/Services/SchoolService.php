<?php

namespace App\Services;

use App\Http\Requests\CreateSchoolRequest;
use App\Models\School;
use App\Models\User;
use App\Repository\SchoolRepository;
use Illuminate\Database\Eloquent\Collection;

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

    public function getSchoolByUser(User $user): Collection
    {
        return $this->repository
            ->query()
            ->byUserId($user->id)
            ->get();
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
                'floors.rooms.devices.lastConsumption',
                'floors.rooms.devices.task',
            ])
            ->first();
    }
}
