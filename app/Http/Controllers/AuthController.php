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
     * Send user an email to change their forgotten password.
     * 
     * @param \Illuminate\Http\Request
     * 
     * @return void|\Illuminate\Http\JsonResponse
     */
    public function forgotPassword(Request $request) {
        try {
            $this->validate($request, [
                'name' => 'required|string',
            ]);

            if ($user = $this->userModel->where('name', $request->get('name'))) {
                $forgotPasswordToken = $user->forgotPasswordToken()->create([]);

                Mail::send(new ForgotPassword($user, $forgotPasswordToken->token));

                return response()->json(['token' => $forgotPasswordToken->token]);
            }

            throw new \Exception('Unknown user!');
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json($e, 400);
        } catch (\Exception $e) {
            $error = $e->getMessage();
            return response()->json(compact('error'), 500);
        }
    }
}
