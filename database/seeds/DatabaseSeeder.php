<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    const USERS_COUNT = 42;
    const TAGS_COUNT = 142;
    const POSTS_COUNT_RANGE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const COMMENTS_COUNT_RANGE = [0, 1, 2, 3, 4, 5];
    const POST_TAGS_COUNT_RANGE = [0, 1, 2, 3, 4, 5];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Tag::class, self::TAGS_COUNT)->create();
        factory(App\User::class, self::USERS_COUNT)->create()->each(function($user) {
            $posts = factory(App\Post::class, array_random(self::POSTS_COUNT_RANGE))->make();
            $user->posts()->saveMany($posts)->each(function($post) {
                $tagsIds = array_random(range(1, self::TAGS_COUNT), array_random(self::POST_TAGS_COUNT_RANGE));
                $post->tags()->attach($tagsIds);
                $comments = factory(App\Comment::class, array_random(self::COMMENTS_COUNT_RANGE))->make();
                $post->comments()->saveMany($comments);
            });
        });
    }
}
