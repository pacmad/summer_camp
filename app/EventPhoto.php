<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EventPhoto extends Model
{
    protected $fillable = [
		"photo_path",
		"section"
	];
}
