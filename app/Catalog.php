<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Catalog extends Model
{
	protected $fillable = [
		"photo_path",
		"title",
		"description",
		"link"
	];
}
