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
    public function one(int $id, Request $request) {
        try {
            return $this->userModel->find($id);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
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
            return $this->userModel->create($request->all());
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}
