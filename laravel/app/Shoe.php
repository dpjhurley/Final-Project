<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Shoe extends Model
{
    //i think this is done through the cart!
    // public function users()
    // {
    //     return $this->belongsToMany('App\User');
    // }

    public function category()
    {
        return $this->belongsTo('App\Category');
    }

    public function brand()
    {
        return $this->belongsTo('App\Brand');
    }

    public function reviews()
    {
        return $this->hasMany('App\Review');
    }

    public function images()
    {
        return $this->hasMany('App\Image');
    }

    public function cartItems()
    {
        return $this->hasMany('App\Cart');
    }

    public function stocks()
    {
        return $this->hasMany('App\Stock');
    }

}
