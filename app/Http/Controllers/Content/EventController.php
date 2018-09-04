<?php

namespace App\Http\Controllers\Content;

use App\Event;
use App\EventPhoto;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EventController extends Controller
{
	/**
	* Display a listing of the resource.
	*
	* @return \Illuminate\Http\Response
	*/
	public function index()
	{
		$photos = DB::table('event_photos')
		->distinct()
		->join('events', 'events.section', '=', 'event_photos.section')
		->select('event_photos.*', DB::raw("(SELECT group_concat(events.activity) FROM events WHERE events.section = event_photos.section) AS sum"))
		->from('event_photos')
		->get();
		// SELECT DISTINCT event_photos.*, (SELECT group_concat(events.activity) FROM events WHERE events.section = event_photos.section) AS sum FROM event_photos JOIN events ON events.section=event_photos.section

		// ->join('event_photos', 'events.section', '=', "event_photos.section")
		// ->select('events.section', 'events.activity', 'event_photos.photo_path')
		// ->get();
		return $photos;
	}

	/**
	* Show the form for creating a new resource.
	*
	* @return \Illuminate\Http\Response
	*/
	public function create()
	{
		//
	}

	/**
	* Store a newly created resource in storage.
	*
	* @param  \Illuminate\Http\Request  $request
	* @return \Illuminate\Http\Response
	*/
	public function store(Request $request)
	{
		//
	}

	/**
	* Display the specified resource.
	*
	* @param  \App\Event  $event
	* @return \Illuminate\Http\Response
	*/
	public function show(Event $event)
	{
		//
	}

	/**
	* Show the form for editing the specified resource.
	*
	* @param  \App\Event  $event
	* @return \Illuminate\Http\Response
	*/
	public function edit(Event $event)
	{
		//
	}

	/**
	* Update the specified resource in storage.
	*
	* @param  \Illuminate\Http\Request  $request
	* @param  \App\Event  $event
	* @return \Illuminate\Http\Response
	*/
	public function update(Request $request, Event $event)
	{
		//
	}

	/**
	* Remove the specified resource from storage.
	*
	* @param  \App\Event  $event
	* @return \Illuminate\Http\Response
	*/
	public function destroy(Event $event)
	{
		//
	}
}
