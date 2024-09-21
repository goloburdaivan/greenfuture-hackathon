<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Services\AuthService;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{
    public function __construct(
        private readonly AuthService $service,
    ) {
    }

    public function indexLogin(): Response
    {
        return Inertia::render('Login');
    }

    public function indexRegister(): Response {
        return Inertia::render('Register');
    }

    public function register(RegisterRequest $request): RedirectResponse
    {
        $this->service->register($request);

        return redirect()->route('login');
    }

    public function login(LoginRequest $request): RedirectResponse
    {
        if (!$this->service->login($request)) {
            return back()->withErrors([
                'credentials' => 'Invalid login or password',
            ]);
        }

        return redirect()->route('user.home');
    }
}
