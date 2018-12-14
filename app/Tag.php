<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\TimestampsAppendZ;

class Tag extends Model
{
    use TimestampsAppendZ;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'key'
    ];

    /**
     * Get posts that contain this tag.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function posts()
    {
        return $this->belongsToMany('App\Post', 'post_tag', 'tag_id', 'post_id');
    }
}