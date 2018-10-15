<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use App\Post as PostModel;

class TagController extends BaseController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(PostModel $postModel)
    {
        $this->postModel = $postModel;
    }

    /**
     * Get posts by tag.
     * 
     * @param string $key Tag's key.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function tagPosts(string $key) {
        return $this->postModel
            ->with(['user', 'comments', 'tags'])
            ->whereHas('tags', function ($query) use ($key) {
                $query->where('key', $key);
            })
            ->get();
    }
}
