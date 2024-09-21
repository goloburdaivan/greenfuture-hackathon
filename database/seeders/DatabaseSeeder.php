<?php

namespace Database\Seeders;

use App\Models\StoreItem;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        StoreItem::create([
            'title' => 'Чоколадка',
            'description' => 'Вкусна чоколадка мілка',
            'image_url' => 'https://pesto-italy.com.ua/image/cache/catalog/products/multiload/99595/shokolad-milka-z-polunitseyu-100g_1-700x700.jpg',
            'price' => 50,
        ]);

        StoreItem::create([
            'title' => 'Смартфон',
            'description' => 'Смартфон Poco C65 8/256Gb Black',
            'image_url' => 'https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/c/3/c3up_black_back_1_.jpg',
            'price' => 899.99,
        ]);

        StoreItem::create([
            'title' => 'Кепка',
            'description' => 'Кепка Пес Патрон',
            'image_url' => 'https://content.rozetka.com.ua/goods/images/big/359227432.png',
            'price' => 1000,
        ]);
    }
}
