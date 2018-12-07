<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\User as UserModel;
use App\ForgotPasswordToken as ForgotPasswordTokenModel;
use App\Mail\ForgotPassword;

class AuthController extends BaseController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(
        UserModel $userModel,
        ForgotPasswordTokenModel $forgotPasswordTokenModel
    )
    {
        $this->userModel = $userModel;
        $this->forgotPasswordTokenModel = $forgotPasswordTokenModel;
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
                'email' => 'required|email',
                'password' => 'required|string'
            ]);

            if ($token = $this->auth->attempt($request->only(['email', 'password']))) {
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

    /**
     * Send user an email to change their forgotten password.
     * 
     * @param \Illuminate\Http\Request
     * 
     * @return void|\Illuminate\Http\JsonResponse
     */
    public function forgotPassword(Request $request) {
        try {
            $this->validate($request, [
                'email' => 'required|email',
            ]);

            if ($user = $this->userModel->where('email', $request->get('email'))) {
                $forgotPasswordToken = $user->forgotPasswordToken()->create([]);

                Mail::send(new ForgotPassword($user, $forgotPasswordToken->token));

                return response()->json(['token' => $forgotPasswordToken->token]);
            }

            throw new \Exception('No user with that email!');
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json($e, 400);
        } catch (\Exception $e) {
            $error = $e->getMessage();
            return response()->json(compact('error'), 500);
        }
    }
}
