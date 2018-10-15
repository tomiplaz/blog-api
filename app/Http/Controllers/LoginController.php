<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\User as UserModel;

class LoginController extends BaseController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(UserModel $userModel)
    {
        $this->userModel = $userModel;
        $this->auth = app('auth');
    }

    /**
     * Attempt to authenticate user.
     * 
     * @param \Illuminate\Http\Request
     *
     * @return \Illuminate\Http\JsonResponse JWT and user instance (on success) or error response.
     */
    public function login(Request $request) {
        try {
            $this->validate($request, [
                'name' => 'required|string',
                'password' => 'required|string'
            ]);

            if ($token = $this->auth->attempt($request->only(['name', 'password']))) {
                $user = $this->auth->user();
                return response()->json(compact('token', 'user'));
            } else {
                $message = 'Invalid credentials.';
                return response()->json(compact('message'), 400);
            }
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json($e, 400);
        } catch (\Exception $e) {
            $error = $e->getMessage();
            return response()->json(compact('error'), 500);
        }
    }
}
