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
        $app->group(['prefix' => 'users'], function () use ($app) {
            $app->get('', 'UserController@all');
        });
        $app->group(['prefix' => 'posts'], function () use ($app) {
            $app->get('', 'PostController@all');
            $app->get('{id}', 'PostController@one');
            $app->post('', 'PostController@create');
        });
    });
});

$app->options('{all:.*}', ['middleware' => 'cors', function() {
    return response('');
}]);
