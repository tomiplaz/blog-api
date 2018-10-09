<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->email,
    ];
});

$factory->define(App\Post::class, function (Faker\Generator $faker) {
    return [
        'user_id' => $faker->numberBetween(1, 2),
        'title' => $faker->sentence,
        'content' => $faker->text,
    ];
});

$factory->define(App\Comment::class, function (Faker\Generator $faker) {
    return [
        'post_id' => $faker->numberBetween(1, 7),
        'user_id' => $faker->optional()->numberBetween(1, 2),
        'text' => $faker->text,
    ];
});
