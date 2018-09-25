<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\User as UserModel;

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
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function all() {
        return $this->userModel->all();
    }

    /**
     * Get a single user.
     * 
     * @param \Illuminate\Http\Request
     * 
     * @return \App\User
     */
    public function one(string $stringId, Request $request) {
        return $this->userModel->where(['string_id' => $stringId])->first();
    }

    /**
     * Create a user.
     * 
     * @param \Illuminate\Http\Request
     * 
     * @return \App\User
     */
    public function create(Request $request) {
        try {
            $this->validate($request, [
                'name' => 'required|string|min:2|max:20',
                'email' => 'required|email|max:100|unique:users',
                'password' => 'required|string|min:8|max:255'
            ]);

            $user = $this->userModel->create($request->only(['name', 'email', 'password']));

            return response()->json($user);
        } catch(\Illuminate\Validation\ValidationException $e) {
            return response()->json($e, 400);
        } catch (\Exception $e) {
            $error = $e->getMessage();
            return response()->json(compact('error'), 500);
        }
    }
}
