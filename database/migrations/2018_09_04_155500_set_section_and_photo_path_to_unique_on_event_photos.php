<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SetSectionAndPhotoPathToUniqueOnEventPhotos extends Migration
{
	/**
	* Run the migrations.
	*
	* @return void
	*/
	public function up()
	{
		Schema::table('event_photos', function (Blueprint $table) {
			$table->unique('section');
			$table->unique('photo_path');
		});
	}

	/**
	* Reverse the migrations.
	*
	* @return void
	*/
	public function down()
	{
		Schema::table('event_photos', function (Blueprint $table) {
			//
		});
	}
}
