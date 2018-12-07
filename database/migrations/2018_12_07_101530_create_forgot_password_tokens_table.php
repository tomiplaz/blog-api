<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateForgotPasswordTokensTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('forgot_password_tokens', function (Blueprint $table) {
            $table->increments('id');
            $table->string('token', 255)->unique();
            $table->unsignedInteger('user_id')->unique();
            $table->timestamps();

            $table->foreign('user_id', 'fk_forgot_password_tokens_user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('forgot_password_tokens', function (Blueprint $table) {
            $table->dropForeign('fk_forgot_password_tokens_user_id');
        });

        Schema::dropIfExists('forgot_password_tokens');
    }
}
