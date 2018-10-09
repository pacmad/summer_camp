<?php

namespace App\Http\Controllers\Content;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class InformationController extends Controller
{
	public function getAllInformation(Request $request)
	{
		$data = array();
		$information = json_decode(DB::table('informations')->get(), true);
		foreach ($information as $key => $record) {
			// return $record;
			$tableName = $record['table_name'];
			$data[$key]['title'] = $record['table_title'];
			$data[$key]['type'] = $record['table_type'];
			$data[$key]['content'] = json_decode((DB::table("$tableName")->select('content')->get()), true);
		}
		return $data;
	}
}
