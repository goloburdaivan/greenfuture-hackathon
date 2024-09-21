<?php

namespace App\Http\Controllers;

use App\Repository\SchoolRepository;
use App\Services\SchoolService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function __construct(
        private readonly SchoolService $schoolService,
    ) {
    }

    public function index(Request $request): Response
    {
        $schools = $this->schoolService->getSchoolByUser($request->user());
        return Inertia::render('Index', [
            'schools' => $schools,
        ]);
    }
}
