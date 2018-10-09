<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('post_id');
            $table->unsignedInteger('user_id')->nullable();
            $table->text('text');
            $table->timestamps();

            $table->foreign('post_id', 'fk_comments_post_id')
                ->references('id')
                ->on('posts')
                ->onDelete('cascade');

            $table->foreign('user_id', 'fk_comments_user_id')
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
        Schema::table('comments', function (Blueprint $table) {
            $table->dropForeign('fk_comments_post_id');
            $table->dropForeign('fk_comments_user_id');
        });

        Schema::dropIfExists('comments');
    }
}
