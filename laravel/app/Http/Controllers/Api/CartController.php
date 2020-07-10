<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\CartItem;
use App\Brand;
use App\Image;
use App\Category;
use Croppa;

class CartController extends Controller
{
    public function index($id)
    {
        $cart = CartItem::query()
            ->where('user_id', $id)
            ->with('shoe')
            ->get();

        $brands = Brand::pluck('name', 'id');

        $categories = Category::pluck('name', 'id');

        foreach ($cart as $item) {
            $item->brand = $brands[$item->shoe->brand_id];
            $item->category = $categories[$item->shoe->category_id];
            $item->image_url = Croppa::url('images/'.$item->shoe->images->first()->path, 200, null, ['resize']);
        }

        // $image = Image::query()->pluck

        //  = ;

        return $cart;
    }

    public function add(Request $request) 
    {
        $item = CartItem::where('shoe_id', $request->input('shoe_id'))->where('user_id', $request->input('user_id'))->first();

        if ($item != null) {
            //item exists
            $item->count += $request->input('count');
            $item->save();

        } else {
            //item doesnt exist, so we make it
            $cartItem = new CartItem;
    
            $cartItem->user_id = $request->input('user_id');
            $cartItem->book_id = $request->input('shoe_id');
            $cartItem->count = $request->input('count');

            $cartItem->save();
        }
    }

    public function remove(Request $request) 
    {
        $item = CartItem::where('shoe_id', $request->input('shoe_id'))->where('user_id', $request->input('user_id'))->first();

        // if ($request->input('count') > $item->count) {
        //     $item->delete();

        // } else {
        //     $item->count -= $request->input('count');

        //     $item->save();
        // }

        return $item;
    }
}
