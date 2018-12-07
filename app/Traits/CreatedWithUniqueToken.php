<?php

namespace App\Traits;

trait CreatedWithUniqueToken
{
    /**
     * Characters used in generating a token: letters (lower- and upper-case) and numbers.
     *
     * @var string
     */
    private static $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    public static function boot() {
        parent::boot();
        static::creating(function ($model) {
            $model->token = self::getUniqueToken();
        });
    }

    /**
     * Generates a token unique to the model.
     *
     * @return string Generated unique token.
     */
    private static function getUniqueToken() {
        $max = strlen(self::$characters) - 1;

        do {
            $token = '';
            for ($i = 0; $i < 32; $i++) {
                $token .= self::$characters[mt_rand(0, $max)];
            }
        } while (!!self::where('token', $token)->first());

        return $token;
    }
}
