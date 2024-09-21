<?php

namespace App\Services;

use App\Constants\App;
use App\Http\Requests\CompleteDeviceTaskRequest;
use App\Models\Device;
use App\Models\DeviceTask;
use App\Repository\DeviceTaskRepository;
use App\Repository\UserRepository;

class DeviceTaskService
{
    public function __construct(
        private readonly DeviceTaskRepository $repository,
        private readonly UserRepository $userRepository,
    )
    {
    }

    public function complete(DeviceTask $task, CompleteDeviceTaskRequest $request)
    {
        $request->validated();
        $imageUrl = $request->file('image')->store('images', 'public');
        $this->repository->update($task, [
            'image_url' => asset('storage/' . $imageUrl),
            'completed' => true,
        ]);

        $this->userRepository->update($request->user(), [
            'coins' => $request->user()->coins + App::DEFAULT_COINS,
        ]);
    }

    public function getLastTask(Device $device): ?DeviceTask
    {
        return $this->repository->query()
            ->byDeviceId($device->id)
            ->notCompleted()
            ->first();
    }
}
