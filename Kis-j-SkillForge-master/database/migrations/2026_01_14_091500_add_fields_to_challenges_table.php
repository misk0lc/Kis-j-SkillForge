<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('challenges', function (Blueprint $table) {
            $table->string('category')->default('CODE')->after('title');
            $table->integer('reward_points')->default(0)->after('difficulty');
            $table->date('start_date')->nullable()->after('reward_points');
            $table->date('end_date')->nullable()->after('start_date');
            $table->boolean('is_active')->default(true)->after('end_date');
        });
    }

    public function down()
    {
        Schema::table('challenges', function (Blueprint $table) {
            $table->dropColumn(['category','reward_points','start_date','end_date','is_active']);
        });
    }
};
