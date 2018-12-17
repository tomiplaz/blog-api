<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Post as PostModel;
use App\User as UserModel;
use App\Tag as TagModel;
use App\Comment as CommentModel;

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
        TagModel $tagModel,
        CommentModel $commentModel
    )
    {
        $this->postModel = $postModel;
        $this->userModel = $userModel;
        $this->tagModel = $tagModel;
        $this->commentModel = $commentModel;
        $this->db = app('db');
    }

    /**
     * Get all posts (filtered by tag if tag query param is present).
     *
     * @param \Illuminate\Http\Request
     *
     * @return \Illuminate\Database\Eloquent\Collection All posts.
     */
    public function all(Request $request) {
        $query = $this->postModel;

        if ($request->has('tag')) {
            $query = $query->whereHas('tags', function ($q) use ($request) {
                $q->where('key', $request->query('tag'));
            });
        }

        if ($request->has('user')) {
            $query = $query->whereHas('user', function ($q) use ($request) {
                $q->where('name', $request->query('user'));
            });
        }

        return $query
            ->with(['user', 'tags'])
            ->withCount(['comments'])
            ->orderBy('id', 'DESC')
            ->paginate(env('PAGINATE_PER_PAGE', 10))
            ->appends($_GET);
    }

    /**
     * Get a single post.
     *
     * @param string $key Post's key.
     *
     * @return \App\Post|null Requested post (if any) or null.
     */
    public function one(string $key) {
        try {
            $post = $this->postModel->where(['key' => $key])->first();
            $post->views_count++;
            $post->save();

            return $this->postModel
                ->with(['user', 'comments.user', 'tags'])
                ->withCount(['comments'])
                ->find($post->id);
        } catch (\Exception $e) {
            $error = $e->getMessage();
            return response()->json(compact('error'), 500);
        }
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
     * @param int $id Post's ID.
     * @param \Illuminate\Http\Request
     *
     * @return \App\Comment|\Illuminate\Http\JsonResponse Created comment or error response.
     */
    public function createPostComment(int $id, Request $request) {
        try {
            $post = $this->postModel->find($id);
            $comment = $post->comments()->create($request->only(['user_id', 'text']));
            return $this->commentModel->with('user')->find($comment->id);
        } catch (\Exception $e) {
            $error = $e->getMessage();
            return response()->json(compact('error'), 500);
        }
    }
}
