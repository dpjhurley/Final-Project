<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            //
            $table->string('first_name')->nullable()->after('id');
            $table->string('surname')->nullable()->after('first_name');
            $table->date('date_of_birth')->nullable()->after('surname');
            $table->string('gender')->nullable()->after('date_of_birth');
            $table->text('address')->nullable()->after('gender');
            $table->boolean('is_admin')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            //
            $table->dropColumn('is_admin');
            $table->dropColumn('address');
            $table->dropColumn('gender');
            $table->dropColumn('date_of_birth');
            $table->dropColumn('surname');
            $table->dropColumn('first_name');
        });
    }
}
