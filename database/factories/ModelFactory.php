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
        'name' => $faker->unique()->word,
        'email' => $faker->unique()->email,
        'password' => 'password',
    ];
});

$factory->define(App\Post::class, function (Faker\Generator $faker) {
    return [
        'title' => $faker->sentence,
        'content' => $faker->text,
    ];
});

$factory->define(App\Comment::class, function (Faker\Generator $faker) {
    $usersCount = App\User::count();
    return [
        'user_id' => $faker->optional()->numberBetween(1, $usersCount),
        'text' => $faker->text,
    ];
});
