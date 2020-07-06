<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Shoe;

class ShoeController extends Controller
{
    //
    public function index()
    {
        $shoes = Shoe::query()
            ->with('images')
            ->with('brand')
            ->limit(8)
            ->get();

        foreach ($shoes as $shoe) {
            if ($shoe->images) {
                $shoe->image_url = Croppa::url('images/shoes/'.$shoe->images[0]->path, 100, null, ['resize']);
            }
        }

        return $shoes;
    }
}
