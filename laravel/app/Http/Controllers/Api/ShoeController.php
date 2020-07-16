<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Shoe;
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
}
