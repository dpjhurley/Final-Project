<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    public function Shoes()
    {
        return $this->hasMany('App\Shoe');
    }
}
