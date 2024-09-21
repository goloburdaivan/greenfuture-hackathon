<?php

namespace App\Repository;

use App\Models\School;
use App\Repository\QueryBuilders\SchoolQueryBuilder;
use Illuminate\Database\Eloquent\Collection;

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

    public function query(): SchoolQueryBuilder
    {
        return new SchoolQueryBuilder();
    }
}
