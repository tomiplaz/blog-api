<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\User as UserModel;

class AuthController extends BaseController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(UserModel $userModel)
    {
        $this->userModel = $userModel;
    }

    /**
     * Attempt to authenticate user and return JWT.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request) {
        if ($token = app('auth')->attempt($request->only(['email', 'password']))) {
            return response()->json(compact('token'));
        } else {
            $message = 'Invalid credentials';
            return response()->json(compact('message'), 400);
        }
    }
}
