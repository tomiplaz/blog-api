<?php

namespace App\Traits;

trait ManagableByStringId
{
    /**
     * Get unique string ID.
     *
     * @return string
     */
    public function getUniqueStringId()
    {
        do {
            $s = '';
            for ($i = 0; $i < 6; $i++) {
                $s .= mt_rand(0, 9);
            }
            $isUnique = !$this->where('string_id', $s)->first();
        } while (!$isUnique);

        return $s;
    }
}
