<?php

use Illuminate\Database\Seeder;
use App\User as UserModel;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(UserModel $userModel)
    {
        $users = [
            [
                'name' => 'foo',
                'email' => 'foo@foo.com',
                'password' => 'foo1'
            ],
            [
                'name' => 'bar',
                'email' => 'bar@bar.com',
                'password' => 'bar1'
            ]
        ];

        foreach ($users as $user) {
            $userModel->create($user);
        }
    }
}
