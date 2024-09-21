<?php

namespace App\Http\Controllers;

use App\Repository\SchoolRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function __construct(
        private readonly SchoolRepository $schoolRepository,
    ) {
    }

    public function index(Request $request): Response
    {
        $schools = $this->schoolRepository->getSchoolsByUser($request->user()->id);
        return Inertia::render('Index', [
            'schools' => $schools,
        ]);
    }
}
