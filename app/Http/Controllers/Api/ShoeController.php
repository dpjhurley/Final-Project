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
        $regex = '%' . strtolower($request->input('search')) . '%';

        $shoesByTitle = Shoe::query()
            ->where('title', 'like', $regex)
            ->with('images')
            ->with('brand')
            ->with('category')
            ->get();

        $shoesByDescription = Shoe::query()
            ->where('description', 'like', $regex)
            ->with('images')
            ->with('brand')
            ->with('category')
            ->get();

        foreach ($shoesByTitle as $st) {
            $shoes[] = $st;
        }

        foreach ($shoesByDescription as $sd) {
            $shoes[] = $sd;
        }

        

        $brands = Brand::query()->where('name', 'like', $regex)->get();

        foreach ($brands as $brand) {
            $shoesInBrand = Shoe::query()
                ->where('brand_id', $brand->id)
                ->with('images')
                ->with('brand')
                ->with('category')
                ->get();
            foreach ($shoesInBrand as $sb) {
                $shoes[] = $sb;
            }
        }

        $shoes = array_unique($shoes);

        foreach ($shoes as $shoe) {
            if ($shoe->images->count() > 0) {
                $shoe->image_url = Croppa::url('images/'.$shoe->images->first()->path, 300, null, ['resize']);
            }
        }
        
        //not the most elagant solution but works for searching by brand, name and description

        return [
            'data' => $shoes,
            'extension' => '/search'
        ];
    }
}
