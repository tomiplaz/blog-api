<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\User as UserModel;
use App\Mail\AccountCreated;

class UserController extends BaseController
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
     * Get all users.
     *
     * @return \Illuminate\Database\Eloquent\Collection All users.
     */
    public function all() {
        return $this->userModel
            ->withCount(['posts', 'comments'])
            ->get();
    }

    /**
     * Get a single user.
     *
     * @param string $stringId User's string Id.
     *
     * @return \App\User|null Requested user (if any) or null.
     */
    public function one(string $stringId) {
        return $this->userModel
            ->withCount(['posts', 'comments'])
            ->where(['string_id' => $stringId])
            ->first();
    }

    /**
     * Create a user.
     *
     * @param \Illuminate\Http\Request
     *
     * @return \App\User|\Illuminate\Http\JsonResponse Created user or error response.
     */
    public function create(Request $request) {
        try {
            $this->validate($request, [
                'name' => 'required|string|min:2|max:20',
                'email' => 'required|email|max:100|unique:users',
                'password' => 'required|string|min:8|max:255'
            ]);

            $user = $this->userModel->create($request->only(['name', 'email', 'password']));

            Mail::send(new AccountCreated($user));

            return $user;
        } catch(\Illuminate\Validation\ValidationException $e) {
            return response()->json($e, 400);
        } catch (\Exception $e) {
            $error = $e->getMessage();
            return response()->json(compact('error'), 500);
        }
    }
}
