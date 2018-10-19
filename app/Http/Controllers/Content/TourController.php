<?php

namespace App\Http\Controllers\Content;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class TourController extends Controller
{
	public function getAllTours(Request $request)
	{
		// $data = array();
		$information = DB::table('tours')->where('open', '=', 1)->get();
		return $information;
	}
}
