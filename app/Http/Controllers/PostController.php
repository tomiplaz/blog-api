<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Post as PostModel;
use App\User as UserModel;
use App\Tag as TagModel;

class PostController extends BaseController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(
        PostModel $postModel,
        UserModel $userModel,
        TagModel $tagModel
    )
    {
        $this->postModel = $postModel;
        $this->userModel = $userModel;
        $this->tagModel = $tagModel;
        $this->db = app('db');
    }

    /**
     * Get all posts.
     *
     * @return \Illuminate\Database\Eloquent\Collection All posts.
     */
    public function all() {
        return $this->postModel
            ->with(['user', 'comments', 'tags'])
            ->get();
    }

    /**
     * Get a single post.
     *
     * @param string $stringId Post's string ID.
     *
     * @return \App\Post|null Requested post (if any) or null.
     */
    public function one(string $stringId) {
        return $this->postModel
            ->with(['user', 'comments.user', 'tags'])
            ->where(['string_id' => $stringId])
            ->first();
    }

    /**
     * Create a post.
     *
     * @param \Illuminate\Http\Request
     *
     * @return \App\Post|\Illuminate\Http\JsonResponse Created post or error response.
     */
    public function create(Request $request) {
        $this->db->beginTransaction();

        try {
            $user = $this->userModel->find($request->get('user_id'));
            $post = $user->posts()->create($request->only(['title', 'content']));

            $tagsIds = [];
            foreach ($request->get('tags') as $tagKey) {
                $tag = $this->tagModel->firstOrCreate(['key' => $tagKey]);
                $tagsIds[] = $tag->id;
            }
            $post->tags()->attach($tagsIds);

            $this->db->commit();
            return $post;
        } catch (\Exception $e) {
            $this->db->rollback();
            $error = $e->getMessage();
            return response()->json(compact('error'), 500);
        }
    }

    /**
     * Create a post's comment.
     *
     * @param string $id Post's ID.
     * @param \Illuminate\Http\Request
     *
     * @return \App\Comment|\Illuminate\Http\JsonResponse Created comment or error response.
     */
    public function createPostComment(string $id, Request $request) {
        try {
            $post = $this->postModel->find($id);
            return $post->comments()->create($request->only(['user_id', 'text']));
        } catch (\Exception $e) {
            $error = $e->getMessage();
            return response()->json(compact('error'), 500);
        }
    }
}
