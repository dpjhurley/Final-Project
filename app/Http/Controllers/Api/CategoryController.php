<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Category;

class CategoryController extends Controller
{
    public function index()
    {
        //no longer required as this is done on the backend to reduce fetch requests.
        
        $categories = Category::all();

        return $categories;
    }
}
