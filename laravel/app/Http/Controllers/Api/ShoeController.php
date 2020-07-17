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
            // $shoes = DB::table('shoes')
            //     ->whereExists(function ($query, Request $request) {
            //         $searchValue = strtolower($request->input('search'));
            //         $regex = '%'.$searchValue.'%';
            //         $brands = Brand::query()
            //             ->where('name', 'like', $regex)
            //             ->get();
            //         $query->select(DB::raw(1))
            //             ->from('brands')
            //             ->whereRaw('brands.id = '.$brands->id);
            //     })
            //     ->get();
        
        $shoes = Shoe::query()
            ->where([
                ['title', 'like', $regex],
            ])->get();

        // foreach ($brands as $brand) {
        //     $shoes += Shoe::query()
        //         ->where('brand_id', 'like', $brand->id)
        //         ->get();
        // }        
        
        // $matches = [];
        // foreach ($shoes as $shoe) {
        //     if (stripos($shoe->brand->name, $regex)) {
        //         $matches[] = $shoe;
        //     } else if (stripos($shoe->category->name, $regex)) {
        //         $matches[] = $shoe;
        //     } else if (stripos($shoe->title, $regex)) {
        //         $matches[] = $shoe;
        //     }

        // }

        return [
            'data' => $shoes,
            'extension' => '/search'
        ];
    }
}
