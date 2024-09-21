<?php

namespace App\Http\Controllers;

use App\Http\Requests\CompleteDeviceTaskRequest;
use App\Models\Device;
use App\Services\DeviceTaskService;
use Illuminate\Http\JsonResponse;

class DeviceTaskController extends Controller
{
    public function __construct(
      private readonly DeviceTaskService $service,
    ) {
    }

    public function complete(Device $device, CompleteDeviceTaskRequest $request): JsonResponse
    {
        $task = $this->service->getLastTask($device);

        if (!$task) {
            abort(404);
        }

        $this->service->complete($task, $request);

        return response()->json([
            'success' => true,
            'message' => 'You gained 10 coins!',
        ]);
    }
}
