<?php

namespace App\Services;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Repository\UserRepository;
use Illuminate\Support\Facades\Auth;

class AuthService
{
    public function __construct(
        private readonly UserRepository $repository,
    ) {
    }

    public function register(RegisterRequest $request): void
    {
        $data = $request->validated();
        $this->repository->create($data);
    }

    public function login(LoginRequest $request): bool
    {
        $data = $request->validated();
        return Auth::attempt($data);
    }
}
