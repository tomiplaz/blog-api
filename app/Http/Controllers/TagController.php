<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use App\Tag as TagModel;

class TagController extends BaseController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(TagModel $tagModel)
    {
        $this->tagModel = $tagModel;
    }

    /**
     * Get posts by tag.
     * 
     * @param string $key Tag's key.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function tagPosts(string $key) {
        return $this->tagModel->where('key', $key)->posts();
    }
}
