<?php

use Illuminate\Database\Seeder;
use App\Image;
use App\Brand;
use App\Shoe;
use App\Category;

class ShoeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('shoes')->truncate(); 
        DB::table('brands')->truncate();   
        DB::table('images')->truncate();  

        $source_file = storage_path('mock_data.json'); // data.json
        if (!file_exists($source_file)) {
            die('Source file '.$source_file.' not found');
        }

        $data = json_decode(file_get_contents($source_file));

        $brands = [];

        foreach ($data as $key => $item) {

            $image = null;
            if (property_exists($item, "images")) {
                foreach ($item->images as $i) {
                    $image = new Image; 
                    $image->shoe_id = $key + 1;
                    $image->path = 'shoes/'.$i;
                    $image->save();
                }
            }

            //change the str to lower so no duplications due to case
            $formatedBrand = strtolower($item->brand);
            //checks is new formatted string exists in array already, avoid duplication of brands in db
            if (!in_array($formatedBrand, $brands)) {
                $brands[] = $formatedBrand;
                //deletes the table before adding them again
                DB::table('brands')->truncate();
                foreach($brands as $b) {
                    $brand = new Brand;
                    $brand->name = $b;
                    $brand->save();       
                }
            }
            //this will be how we add the brand_id to shoes, using the brand name as a key to our array below
            //array_combine gives the correct id as the key, and arrray_flip changes the keys and values around
            $formatedBrandsArray=array_flip(array_combine(range(1, count($brands)), $brands));

            $categories = Category::pluck('id', 'name')->toArray();


            $shoe = new Shoe;
            $shoe->category_id = $categories[$item->category];
            $shoe->brand_id = $formatedBrandsArray[$item->brand];
            $shoe->title = $item->title;
            $shoe->description = $item->description;
            $shoe->price = $item->price;
            $shoe->color = $item->color;
            $shoe->material = $item->material;
            $shoe->gender = $item->gender;
            $shoe->is_adult = $item->is_adult;

            $shoe->save();
        }
    }
}
