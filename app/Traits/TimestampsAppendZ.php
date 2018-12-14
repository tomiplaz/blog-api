<?php

namespace App\Traits;

trait TimestampsAppendZ
{
    /**
     * Accessor for created_at attribute.
     *
     * @return string Timestamp with Z appended (designates UTC timezone).
     */
    public function getCreatedAtAttribute($value)
    {
        return $value . 'Z';
    }

    /**
     * Accessor for updated_at attribute.
     *
     * @return string Timestamp with Z appended (designates UTC timezone).
     */
    public function getUpdatedAtAttribute($value)
    {
        return $value . 'Z';
    }
}
