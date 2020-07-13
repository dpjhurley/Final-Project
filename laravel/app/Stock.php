<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    public function size()
    {
        return $this->belongsTo('App\Size');
    }

    public function shoe()
    {
        return $this->belongsTo('App\Shoe');
    }
}
