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

	public function bookTour(Request $request)
    {

//        return $request;
        $id = DB::table('bookings')->insertGetId([
            'firstName'     => $request['firstName'],
            'lastName'      => $request['lastName'],
            'fatherName'    => $request['fatherName'],
            'birthDate'     => $request['birthDate'],
            'address'       => $request['address'],
            'parentsInfo'   => $request['parentsInfo'],
            'tourId'        => $request['tourId'],
            'size'          => isset($request['size']) ? $request['size'] : 'm',
            'gender'        => isset($request['gender']) ? $request['gender'] : 'male',
            'transferFirst' => isset($request['transferFirst']) ? $request['transferFirst'] : 'kiev',
            'transferBack'  => isset($request['transferBack']) ? $request['transferBack'] : 'kiev',
        ]);
        return $id;
    }
}
