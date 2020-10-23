<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CartItem extends Model
{
    public function users()
    {
        return $this->belongsToMany('App\User');
    }

    public function shoe()
    {
        return $this->belongsTo('App\Shoe');
    }
}
