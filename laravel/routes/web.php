<?php

use Illuminate\Support\Facades\Route;
use App\Mail\InvoiceEmail;
use Illuminate\Support\Facades\Mail;
use App\User;
use App\Mail\InvoicePaid;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('shoe-list');
// });

Auth::routes();

Route::view('/{path?}', 'app')
     ->where('path', '.*')
     ->name('react');

// Route::get('/home', 'HomeController@index')->name('home');
// Route::get('/test', 'TestController@index');

// Route::get('/send-email', function() {
//      // return 'hello I will send Email';

//      Mail::to('test@cbp.cz')->send(new InvoiceEmail());
// });

// Route::get('/send-notification', function() {
//      $user = User::first();

//      $user->notify(new InvoicePaid());
// });