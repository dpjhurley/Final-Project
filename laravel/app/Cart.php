<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    public function users()
    {
        return $this->hasOne('App\User');
    }

    public function shoes()
    {
        return $this->belongsToMany('App\Shoe');
    }
}
