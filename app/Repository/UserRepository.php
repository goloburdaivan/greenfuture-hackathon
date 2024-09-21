<?php

namespace App\Repository;

use App\Models\User;

class UserRepository
{
    public function create(array $data): User
    {
        $user = new User();
        return $this->update($user, $data);
    }

    public function update(User $user, array $data): User
    {
        $user->fill($data);
        if (!$user->save()) {
            throw new \Exception("Failed to update user data");
        }

        return $user;
    }
}
