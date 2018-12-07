<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\CreatedWithUniqueToken;

class ForgotPasswordToken extends Model
{
    use CreatedWithUniqueToken;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [];

    /**
     * Get forgot password token's user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }
}