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
            $table->string('surname')->nullable()->after('name');
            $table->date('date_of_birth')->nullable()->after('surname');
            $table->string('gender')->nullable()->after('date_of_birth');
            $table->text('address')->nullable()->after('gender');
            $table->boolean('mailing_list')->nullable()->after('address');
            $table->boolean('is_admin')->nullable()->after('remember_token');
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
            $table->dropColumn('mailing_list');
            $table->dropColumn('address');
            $table->dropColumn('gender');
            $table->dropColumn('date_of_birth');
            $table->dropColumn('surname');
            $table->dropColumn('first_name');
        });
    }
}
