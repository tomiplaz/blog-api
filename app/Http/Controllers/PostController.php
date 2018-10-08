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
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function all() {
        return $this->postModel
            ->with(['user', 'comments', 'tags'])
            ->get();
    }

    /**
     * Get a single post.
     *
     * @param \Illuminate\Http\Request
     *
     * @return \App\Post
     */
    public function one(string $stringId, Request $request) {
        return $this->postModel
            ->with(['user', 'comments', 'tags'])
            ->where(['string_id' => $stringId])
            ->first();
    }

    /**
     * Create a post.
     *
     * @param \Illuminate\Http\Request
     *
     * @return \App\Post
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
            return $e->getMessage();
        }
    }

    /**
     * Create a post's comment.
     *
     * @param \Illuminate\Http\Request
     *
     * @return \App\Comment
     */
    public function createPostComment(string $id, Request $request) {
        try {
            $post = $this->postModel->find($id);
            return $post->comments()->create($request->only(['user_id', 'text']));
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}
