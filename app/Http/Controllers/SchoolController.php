<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateSchoolRequest;
use App\Models\School;
use App\Services\SchoolService;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class SchoolController extends Controller
{
    public function __construct(
        private readonly SchoolService $service,
    ) {
    }

    public function store(CreateSchoolRequest $request): RedirectResponse
    {
        $this->service->create($request->user(), $request);
        return redirect()->route('user.home');
    }

    public function show(School $school): Response
    {
        $school = $this->service->getSchoolData($school->id);
        return Inertia::render('School/Show', [
            'school' => $school,
        ]);
    }
}
