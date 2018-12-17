<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\TimestampsAppendZ;

class Post extends Model
{
    use TimestampsAppendZ;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'content'
    ];

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    public static function boot() {
        parent::boot();
        static::creating(function ($post) {
            $post->key = $post->getUniqueKey();
        });
    }

    /**
     * Generates a unique key based on post's title.
     *
     * @return string Lower case string with non-alphanumeric characters replaced with dash.
     */
    private function getUniqueKey()
    {
        do {
            $key = strtolower(preg_replace('/[^a-zA-Z0-9]/', '-', $this->title));
        } while ($this->where('key', $key)->first());

        return $key;
    }

    /**
     * Get post's author.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }

    /**
     * Get post's comments.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function comments()
    {
        return $this->hasMany('App\Comment', 'post_id')->orderBy('id', 'DESC');
    }

    /**
     * Get post's tags.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function tags()
    {
        return $this->belongsToMany('App\Tag', 'post_tag', 'post_id', 'tag_id');
    }
}