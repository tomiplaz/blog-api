<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 5)->create()->each(function($user) {
            $posts = factory(App\Post::class, array_random(range(1, 5)))->make();
            $user->posts()->saveMany($posts)->each(function($post) {
                $comments = factory(App\Comment::class, array_random(range(1, 5)))->make();
                $post->comments()->saveMany($comments);
            });
        });
    }
}
