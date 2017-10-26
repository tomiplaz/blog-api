<?php

use Illuminate\Database\Seeder;
use App\Tag as TagModel;

class TagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(TagModel $tagModel)
    {
        $tags = [
            [
                'key' => 'snooker'
            ],
            [
                'key' => 'skateboarding'
            ],
            [
                'key' => 'life'
            ],
            [
                'key' => 'traveling'
            ],
            [
                'key' => 'adventure'
            ],
            [
                'key' => 'space'
            ]
        ];

        foreach ($tags as $tag) {
            $tagModel->create($tag);
        }
    }
}
