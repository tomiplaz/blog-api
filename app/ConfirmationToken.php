<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\CreatedWithUniqueToken;
use App\Traits\TimestampsAppendZ;

class ConfirmationToken extends Model
{
    use CreatedWithUniqueToken, TimestampsAppendZ;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [];

    /**
     * Get confirmation token's user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }
}