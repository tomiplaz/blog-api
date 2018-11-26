<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ConfirmationToken extends Model
{
    const TOKEN_CHARACTERS =
        'abcdefghijklmnopqrstuvwxyz' .
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ' .
        '0123456789';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [];

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    public static function boot() {
        parent::boot();
        static::creating(function ($confirmationToken) {
            $confirmationToken->token = self::getToken();
        });
    }

    private static function getToken() {
        $max = strlen(self::TOKEN_CHARACTERS) - 1;

        do {
            $token = '';
            for ($i = 0; $i < 32; $i++) {
                $token .= self::TOKEN_CHARACTERS[mt_rand(0, $max)];
            }
        } while (!!self::where('token', $token)->first());

        return $token;
    }

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