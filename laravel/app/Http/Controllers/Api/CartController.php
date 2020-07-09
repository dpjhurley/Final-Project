<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\CartItem;

class CartController extends Controller
{
    public function index($id)
    {
        $cart = CartItem::query()
            ->where('user_id', $id)
            ->get();
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

        if ($request->input('count') > $item->count) {
            $item->delete();

        } else {
            $item->count -= $request->input('count');

            $item->save();
        }
    }
}
