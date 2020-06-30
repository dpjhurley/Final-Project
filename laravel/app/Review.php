<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    public function shoes()
    {
        return $this->hasMany('App\Shoe');
    }

    public function users()
    {
        return $this->hasMany('App\User');
    }
}
