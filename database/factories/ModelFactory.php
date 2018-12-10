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

$factory->define(App\User::class, function(Faker\Generator $faker) {
    return [
        'name' => $faker->word . $faker->numberBetween($min = 0, $max = 473289),
        'email' => $faker->unique()->email,
        'website' => $faker->url,
        'about' => $faker->text($maxNbChars = 1000),
        'password' => 'password',
    ];
});

$factory->define(App\Post::class, function(Faker\Generator $faker) {
    return [
        'title' => $faker->sentence,
        'content' => $faker->text,
    ];
});

$factory->define(App\Comment::class, function(Faker\Generator $faker) {
    return [
        'user_id' => $faker->optional()->numberBetween(1, DatabaseSeeder::USERS_COUNT),
        'text' => $faker->text,
    ];
});

$factory->define(App\Tag::class, function(Faker\Generator $faker) {
    return [
        'key' => $faker->unique()->word,
    ];
});
