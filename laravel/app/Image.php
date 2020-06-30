<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    public function shoes()
    {
        return $this->belongsToMany('App\Shoe');
    }
}
