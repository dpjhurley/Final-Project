<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class RegisterController extends Controller
{
    //
    public function __construct()
    {
        $this->middleware('guest');
    }

    // protected function validator(Request $request, array $data)
    // {
    //     return Validator::make($data, [
    //         'name' => ['required', 'string', 'max:255'],
    //         'surname' => ['required', 'string', 'max:255'],
    //         'date_of_birth' => ['required', 'date'],
    //         'gender' => ['required', 'string'],
    //         'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
    //         'password' => ['required', 'string', 'min:8', 'confirmed'],
    //     ]);
    // }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */

    protected function create(Request $request)
    {
        $user = new User;
        $user->name = $request->input('name');
        $user->surname = $request->input('surname');
        $user->date_of_birth = $request->input('date_of_birth');
        $user->gender = $request->input('gender');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));

        $user->save();
    }
}
