<?php

use Illuminate\Database\Seeder;
use App\Size;

class SizeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sizes')->truncate();

        $sizes = range(14, 48, 0.5);

        foreach ($sizes as $size) {
            Size::create([
                'size' => $size
            ]);
        }
    }
}
