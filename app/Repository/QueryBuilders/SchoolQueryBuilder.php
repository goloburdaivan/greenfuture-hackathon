<?php

namespace App\Repository\QueryBuilders;

use App\Models\School;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class SchoolQueryBuilder
{
    private Builder $query;

    public function __construct()
    {
        $this->query = School::query();
    }

    public function byId(int $schoolId): self
    {
        $this->query->where('id', $schoolId);
        return $this;
    }

    public function loadRelations(array $relations): self
    {
        $this->query->with($relations);
        return $this;
    }

    public function first(): ?School
    {
        return $this->query->first();
    }

    public function get(): Collection
    {
        return $this->query->get();
    }
}
