<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Brand;

class BrandController extends Controller
{
    public function index()
    {
        //no longer required as this is done on the backend to reduce fetch requests.
        
        $brands = Brand::all();

        return $brands;
    }
}
