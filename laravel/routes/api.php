<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/shoes', 'Api\ShoeController@index');
Route::get('/shoes/{shoe_id}', 'Api\ShoeController@show');
Route::get('/brands', 'Api\BrandController@index');
Route::get('/colors', 'Api\ColorController@index');
Route::get('/categories', 'Api\CategoryController@index');



Route::group(['middleware' => ['auth:api']], function ($group) {

    // Shopuld you have to be logged in to add to your cart OR not
    Route::get('/cart', 'Api\CartController@index');
    Route::post('/cart/{shoe_id}/add', 'Api\CartController@add');
    Route::post('/cart/{shoe_id}/remove', 'Api\CartController@remove');
    Route::post('/cart/{shoe_id}/edit', 'Api\CartController@edit');

});

// Route::get('/cart/{user_id}', 'Api\CartController@index');
// Route::post('/cart/{user_id}/{shoe_id}/add', 'Api\CartController@add');
// Route::post('/cart/{user_id}/{shoe_id}/remove', 'Api\CartController@remove');
// Route::post('/cart/{user_id}/{shoe_id}/edit', 'Api\CartController@edit');

Route::post('/login', 'Api\LoginController@login');
Route::post('/register', 'Api\RegisterController@register');
Route::get('/user', 'Api\LoginController@find');