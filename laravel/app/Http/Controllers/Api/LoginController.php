<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Str;
use App\User;

class LoginController extends Controller
{
    use AuthenticatesUsers;
    
    public function __construct()
    {
        $this->middleware('guest')->except(['logout', 'find']);
    }
    
    protected function sendFailedLoginResponse(Request $request)
    {
        return [
            'status' => 'fail',
            'message' => 'Wrong login credentials',
            'data' => []
        ];
    }
    
    protected function sendLoginResponse(Request $request)
    {
        $token = Str::random(80);
    
        $this->guard()->user()->forceFill([
            'api_token' => hash('sha256', $token),
        ])->save();

        $user = User::query()->where('email', $request->input('email'))->first();
    
        return [
            'user' => $user,
            'status' => 'success',
            'message' => 'Login successful',
            'data' => [
                'token' => $token
            ]
        ];
    }
    
    protected function loggedOut(Request $request)
    {
        $this->guard()->user()->token()->revoke();
        
        return [
            'user' => null,
            'status' => 'fail',
            'message' => 'Successfully logged out',
            'data' => []
        ];
    }

    public function find()
    {
        return $this->guard()->user();
    }
}
