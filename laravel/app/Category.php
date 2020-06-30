<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function shoe()
    {
        return $this->hasMany('App\Shoe');
    }
}
