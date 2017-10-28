<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Post as PostModel;
use App\User as UserModel;

class PostController extends BaseController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(
        PostModel $postModel,
        UserModel $userModel
    )
    {
        $this->postModel = $postModel;
        $this->userModel = $userModel;
    }

    /**
     * Get all posts.
     * 
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function all() {
        return $this->postModel->all();
    }

    /**
     * Get a single post.
     * 
     * @param \Illuminate\Http\Request
     * 
     * @return \App\Post
     */
    public function one(int $id, Request $request) {
        return $this->postModel->find($id);
    }

    /**
     * Create a post.
     * 
     * @param \Illuminate\Http\Request
     * 
     * @return \App\Post
     */
    public function create(Request $request) {
        try {
            $user = $this->userModel->find($request->get('user_id'));
            return $user->posts()->create($request->only(['title', 'content']));
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}
