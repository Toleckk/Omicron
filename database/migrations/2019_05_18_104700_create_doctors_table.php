<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDoctorsTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {

        Schema::create('doctors', function (Blueprint $table) {
            $table->charset = 'utf16';

            $table->increments('id');
            $table->string('name');
            $table->string('rank');
            $table->text('description');
            $table->string('department');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('doctors');
    }
}
