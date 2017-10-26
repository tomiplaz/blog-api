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
                'email' => 'foo12345@foo.com'
            ],
            [
                'name' => 'bar',
                'email' => 'bar12345@foo.com'
            ]
        ];

        foreach ($users as $user) {
            $userModel->create($user);
        }
    }
}
