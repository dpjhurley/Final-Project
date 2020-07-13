<?php

use Illuminate\Database\Seeder;
use App\Stock;
use App\Size;

class StockSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $source_file = storage_path('mock_stock_data.json'); // data.json
        if (!file_exists($source_file)) {
            die('Source file '.$source_file.' not found');
        }

        $data = json_decode(file_get_contents($source_file));

        $sizeArray = Size::pluck('id', 'size')->toArray();

        foreach ($data as $shoeSize) {
            $stock = new Stock;

            $stock->shoe_id = $shoeSize->shoe_id;
            $stock->size_id = $sizeArray[$shoeSize->size];
            $stock->stock = $shoeSize->stock;

            $stock->save();
        }
    }
}
