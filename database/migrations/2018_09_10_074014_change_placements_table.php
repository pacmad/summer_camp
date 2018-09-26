<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangePlacementsTable extends Migration
{
	/**
	* Run the migrations.
	*
	* @return void
	*/
	public function up()
	{
		Schema::table('placements', function (Blueprint $table) {
			$table->dropColumn('location');
			$table->dropColumn('how_to_get');
			$table->dropColumn('accomodation');
			$table->dropColumn('additional');
			$table->text('title');
			$table->text('description');
		});
	}

	/**
	* Reverse the migrations.
	*
	* @return void
	*/
	public function down()
	{
		Schema::table('placements', function (Blueprint $table) {
			$table->text('location');
			$table->text('how_to_get');
			$table->text('accomodation');
			$table->text('additional');
			$table->dropColumn('title');
			$table->dropColumn('description');
		});
	}
}
