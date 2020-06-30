<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShoesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shoes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable();
            $table->foreignId('category_id')->nullable();
            $table->foreignId('brand_id')->nullable();
            $table->string('title')->nullable();
            $table->text('description')->nullable();
            $table->float('price', 10, 2)->nullable();
            $table->string('color')->nullable();
            $table->string('material')->nullable();
            $table->boolean('gender')->nullable();
            $table->boolean('is_adult')->nullable();
            $table->string('image')->nullable();
            $table->float('size', 10, 2)->nullable();
            $table->bigInteger('stock')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shoes');
    }
}
