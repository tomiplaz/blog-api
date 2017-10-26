<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
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
}
