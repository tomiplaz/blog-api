<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\User as UserModel;
use App\Post as PostModel;
use App\Comment as CommentModel;

class Controller extends BaseController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(
        UserModel $userModel,
        PostModel $postModel,
        CommentModel $commentModel
    )
    {
        $this->userModel = $userModel;
        $this->postModel = $postModel;
        $this->commentModel = $commentModel;
    }

    /**
     * Get data to display on home page.
     *
     * @param \Illuminate\Http\Request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getHomeData(Request $request)
    {
        $postsQuery = $this->postModel->with(['user', 'tags'])->withCount(['comments']);

        $posts = [
            'recent' => (clone $postsQuery)->orderBy('id', 'DESC')->take(3)->get(),
            'random' => (clone $postsQuery)->inRandomOrder()->take(3)->get(),
        ];
        $stats = [
            'users_count' => $this->userModel->count(),
            'posts_count' => $this->postModel->count(),
            'comments_count' => $this->commentModel->count(),
        ];

        return response()->json(compact('posts', 'stats'));
    }
}
