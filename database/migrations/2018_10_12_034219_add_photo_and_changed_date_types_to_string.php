<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddPhotoAndChangedDateTypesToString extends Migration
{
	/**
	* Run the migrations.
	*
	* @return void
	*/
	public function up()
	{
		Schema::table('tours', function (Blueprint $table) {
			$table->string('tour_start')->change();
			$table->string('tour_end')->change();
			$table->string("photo");
		});
	}

	/**
	* Reverse the migrations.
	*
	* @return void
	*/
	public function down()
	{
		Schema::table('tours', function (Blueprint $table) {
			$table->dropColumn("photo");
		});
	}
}
