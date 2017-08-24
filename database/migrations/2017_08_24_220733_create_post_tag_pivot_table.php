<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostTagPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post_tag', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('post_id');
            $table->unsignedInteger('tag_id');

            $table->foreign('post_id', 'fk_post_tag_post_id')
                ->references('id')
                ->on('posts')
                ->onDelete('cascade');

            $table->foreign('tag_id', 'fk_post_tag_tag_id')
                ->references('id')
                ->on('tags')
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
        Schema::table('post_tag', function (Blueprint $table) {
            $table->dropForeign('fk_post_tag_post_id');
            $table->dropForeign('fk_post_tag_tag_id');
        });

        Schema::dropIfExists('post_tag');
    }
}
