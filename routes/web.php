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
        $app->get('home', 'Controller@getHomeData');

        $app->group(['prefix' => 'auth'], function () use ($app) {
            $ctrl = 'AuthController';

            $app->post('confirm-account', $ctrl . '@confirmAccount');
            $app->post('login', $ctrl . '@login');
            $app->post('forgot-password', $ctrl . '@forgotPassword');
            $app->post('reset-password', $ctrl . '@resetPassword');
        });

        $app->group(['prefix' => 'users'], function () use ($app) {
            $ctrl = 'UserController';

            $app->get('', $ctrl . '@all');
            $app->post('', $ctrl . '@create');
            $app->get('{stringId}', $ctrl . '@one');
            $app->patch('{id}', $ctrl . '@update');
            $app->post('{id}/change-password', $ctrl . '@changePassword');
        });

        $app->group(['prefix' => 'posts'], function () use ($app) {
            $ctrl = 'PostController';

            $app->get('', $ctrl . '@all');
            $app->post('', $ctrl . '@create');
            $app->get('{stringId}', $ctrl . '@one');
            $app->post('{id}/comments', $ctrl . '@createPostComment');
        });
    });
});

$app->get('{any:.*}', function () {
    return view('index');
});
