<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\User as UserModel;
use App\ConfirmationToken as ConfirmationTokenModel;
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
        ConfirmationTokenModel $confirmationTokenModel,
        ForgotPasswordTokenModel $forgotPasswordTokenModel
    )
    {
        $this->userModel = $userModel;
        $this->confirmationTokenModel = $confirmationTokenModel;
        $this->forgotPasswordTokenModel = $forgotPasswordTokenModel;
        $this->auth = app('auth');
        $this->db = app('db');
    }

    /**
     * Confirm an account.
     *
     * @param \Illuminate\Http\Request
     *
     * @return null|\Illuminate\Http\JsonResponse Index view or error response.
     */
    public function confirmAccount(Request $request) {
        try {
            $this->validate($request, [
                'token' => 'required|string|exists:confirmation_tokens,token',
            ]);

            $this->db->beginTransaction();

            $confirmationToken = $this->confirmationTokenModel
                ->where('token', $request->get('token'))
                ->first();

            $confirmationToken->user->is_confirmed = true;
            $confirmationToken->user->save();

            $confirmationToken->delete();

            $this->db->commit();

            return null;
        } catch (Illuminate\Validation\ValidationException $e) {
            return response()->json($e, 400);
        } catch (\Exception $e) {
            $this->db->rollback();
            $error = $e->getMessage();
            return response()->json(compact('error'), 500);
        }
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
     * @return null|\Illuminate\Http\JsonResponse
     */
    public function forgotPassword(Request $request) {
        try {
            $this->validate($request, [
                'email' => 'required|email',
            ]);

            if ($user = $this->userModel->where('email', $request->get('email'))->first()) {
                $user->forgotPasswordToken()->delete();

                $forgotPasswordToken = $user->forgotPasswordToken()->create([]);

                Mail::send(new ForgotPassword($user, $forgotPasswordToken->token));

                return null;
            }

            throw new \Exception('No user with that email!');
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json($e, 400);
        } catch (\Exception $e) {
            $error = $e->getMessage();
            return response()->json(compact('error'), 500);
        }
    }

    /**
     * Reset user's password if forgot password token is valid.
     *
     * @param \Illuminate\Http\Request
     *
     * @return null|\Illuminate\Http\JsonResponse
     */
    public function resetPassword(Request $request) {
        try {
            $this->validate($request, [
                'token' => 'required|string|exists:forgot_password_tokens,token',
            ]);

            $this->db->beginTransaction();

            $forgotPasswordToken = $this->forgotPasswordTokenModel
                ->where('token', $request->get('token'))
                ->first();

            $forgotPasswordToken->user()->update([
                'password' => $request->get('newPassword'),
            ]);

            $forgotPasswordToken->delete();

            $this->db->commit();

            return null;
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json($e, 400);
        } catch (\Exception $e) {
            $this->db->rollback();
            $error = $e->getMessage();
            return response()->json(compact('error'), 500);
        }
    }
}
