<?php

namespace App\Http\Controllers;

use App\Models\StoreItem;
use App\Repository\ShopItemRepository;
use App\Repository\UserRepository;
use App\Services\UserService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class ShopController extends Controller
{
    public function __construct(
        private ShopItemRepository $repository,
        private UserService $service,
    ) {
    }

    public function index(): Response
    {
        return Inertia::render('Shop', [
            'items' => $this->repository->all(),
        ]);
    }

    public function buy(StoreItem $item, Request $request): JsonResponse
    {
        $this->service->withdraw($request->user(), $item->price);

        return response()->json([
            'success' => true,
            'item' => $item,
            'message' => 'Вітаю! Ви купили річ в магазині! Покажіть цей скріншот вчительці',
            'hash' => Str::random(64),
        ]);
    }
}
