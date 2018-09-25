<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->group(['prefix' => 'api'], function () use ($app) {
    $app->group(['prefix' => 'v1'], function () use ($app) {
        $app->post('login', 'LoginController@login');

        $app->group(['prefix' => 'users'], function () use ($app) {
            $ctrl = 'UserController';
            $app->get('', $ctrl . '@all');
            $app->get('{stringId}', $ctrl . '@one');
            $app->post('', $ctrl . '@create');
        });

        $app->group(['prefix' => 'posts'], function () use ($app) {
            $ctrl = 'PostController';
            $app->get('', $ctrl . '@all');
            $app->get('{stringId}', $ctrl . '@one');
            $app->post('', $ctrl . '@create');
        });
    });
});
