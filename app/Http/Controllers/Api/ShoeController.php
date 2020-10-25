<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Shoe;
use App\Brand;
use App\Category;
use DB;
use Croppa;

class ShoeController extends Controller
{
    //
    public function index()
    {
        $shoes = Shoe::query()
            ->with('images')
            ->with('brand')
            ->with('category')
            // ->limit(8)
            ->get();

        foreach ($shoes as $shoe) {
            if ($shoe->images->count() > 0) {
                $shoe->image_url = Croppa::url('images/'.$shoe->images->first()->path, 300, null, ['resize']);
            }
        }

        return $shoes;
    }

    public function id()
    {
        $shoes = Shoe::all();

        return $shoes;
    }

    public function show($shoe_id)
    {
        $shoe = Shoe::where('id', $shoe_id)
        ->with('images')
        ->with('brand')
        ->with('category')
        ->with('stocks')
        ->first();

        return $shoe;

    }

    public function men() 
    {
        $shoes = Shoe::query()
            ->where('gender', 'male')
            ->where('is_adult', true)
            ->with('images')
            ->with('brand')
            ->with('category')
            // ->limit(8)
            ->get();

        foreach ($shoes as $shoe) {
            if ($shoe->images->count() > 0) {
                $shoe->image_url = Croppa::url('images/'.$shoe->images->first()->path, 300, null, ['resize']);
            }
        }

        return $shoes;
    }

    public function women() 
    {
        $shoes = Shoe::query()
            ->where('gender', 'female')
            ->where('is_adult', true)
            ->with('images')
            ->with('brand')
            ->with('category')
            // ->limit(8)
            ->get();

        foreach ($shoes as $shoe) {
            if ($shoe->images->count() > 0) {
                $shoe->image_url = Croppa::url('images/'.$shoe->images->first()->path, 300, null, ['resize']);
            }
        }

        return $shoes;
    }

    public function kids() 
    {
        $shoes = Shoe::query()
            ->where('is_adult', false)
            ->with('images')
            ->with('brand')
            ->with('category')
            // ->limit(8)
            ->get();

        foreach ($shoes as $shoe) {
            if ($shoe->images->count() > 0) {
                $shoe->image_url = Croppa::url('images/'.$shoe->images->first()->path, 300, null, ['resize']);
            }
        }

        return $shoes;
    }

    public function search(Request $request)
    {
        $shoeTitle = Shoe::query()
            ->where('title', 'like', '%' . strtolower($request->input('search')) . '%')
            ->get();

        $shoeDescription = Shoe::query()
            ->where('description', 'like', '%' . strtolower($request->input('search')) . '%')
            ->get();

        if (!$shoeTitle && !$shoeDescription) {
            $shoes = array_unique(array_merge($shoeTitle, $shoeDescription));
        }
        

        $brands = Brand::all();

        //now we will check the inputed string into the brands list and return the brand id of where there is a match. then search for shoes by all the matching brands. finally joining these all togetehr to be served to the front end

        return [
            'data' => $brands,
            'extension' => '/search'
        ];
    }
}
