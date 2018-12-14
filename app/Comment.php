<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\TimestampsAppendZ;

class Comment extends Model
{
    use TimestampsAppendZ;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'text'
    ];

    /**
     * Get comment's post.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function post()
    {
        return $this->belongsTo('App\Post', 'post_id');
    }

    /**
     * Get comment's author.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }
}