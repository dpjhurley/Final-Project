<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\CartItem;
use App\Brand;
use App\Image;
use App\Category;
use App\Size;
use App\Stock;
use Croppa;

class CartController extends Controller
{
    public function index($user_id)
    {
        $cart = CartItem::query()
            ->where('user_id', $user_id)
            ->with('shoe')
            ->get();

        $brands = Brand::pluck('name', 'id');

        $categories = Category::pluck('name', 'id');

        foreach ($cart as $item) {
            $item->brand = $brands[$item->shoe->brand_id];
            $item->category = $categories[$item->shoe->category_id];
            $item->image_url = Croppa::url('images/'.$item->shoe->images->first()->path, 200, null, ['resize']);
            $item->stock = Stock::where('shoe_id', $item->shoe_id)->where('size', $item->size)->first();
        }

        // $image = Image::query()->pluck

        //  = ;

        return $cart;
    }

    public function add($user_id, $shoe_id, Request $request) 
    {
        $cartItem = CartItem::where('user_id', $user_id)->where('shoe_id', $shoe_id)->where('size', $request->input('size'))->first();

        if ($cartItem != null) {
            $cartItem->count += $request->input('quantity');
            $cartItem->save();
        } else {
            $cartItem = new CartItem;

            $cartItem->user_id = $user_id;
            $cartItem->shoe_id = $shoe_id;
            $cartItem->size = $request->input('size');
            $cartItem->count = $request->input('quantity');

            $cartItem->save();
        }
        
        return $cartItem;
    }

    public function remove($user_id, $shoe_id)
    {
        $item = CartItem::where('user_id', $user_id)->where('shoe_id', $shoe_id)->first();
        $item->delete();
    }

    public function edit($user_id, $shoe_id, Request $request)
    {
        $item = CartItem::where('user_id', $user_id)->where('shoe_id', $shoe_id)->first();
        if ($request->input('newQuantity') == 0) {
            $item->delete();
        } else {
            $item->count = $request->input('newQuantity');
            $item->save();
        }
        
    }
}
