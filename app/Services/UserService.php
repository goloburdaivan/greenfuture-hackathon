<?php

namespace App\Services;

use App\Exceptions\InsufficientBalanceException;
use App\Models\User;
use App\Repository\UserRepository;

class UserService
{
    public function __construct(
        private UserRepository $repository,
    ) {
    }

    /**
     * @throws InsufficientBalanceException
     */
    public function withdraw(User $user, int $coins): void
    {
        if ($user->coins < $coins) {
            throw new InsufficientBalanceException("You dont have enough coins");
        }

        $this->repository->update($user, [
            'coins' => $user->coins - $coins,
        ]);
    }
}
