<?php

namespace App\Repository;

use App\Models\School;

class SchoolRepository
{
    public function create(array $data): School {
        $school = new School();
        return $this->update($school, $data);
    }

    public function update(School $school, array $data): School {
        $school->fill($data);
        if (!$school->save()) {
            throw new \Exception("Failed to update school");
        }

        return $school;
    }
}
