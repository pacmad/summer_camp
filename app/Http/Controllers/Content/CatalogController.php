<?php

namespace App\Http\Controllers\Content;

use App\Catalog;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CatalogController extends Controller
{
	/**
	* Display a listing of the resource.
	*
	* @return \Illuminate\Http\Response
	*/
	public function index()
	{
		$catalog = Catalog::all();
		return $catalog;
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
	* @param  \App\Catalog  $catalog
	* @return \Illuminate\Http\Response
	*/
	public function show(Catalog $catalog)
	{
		//
	}

	/**
	* Show the form for editing the specified resource.
	*
	* @param  \App\Catalog  $catalog
	* @return \Illuminate\Http\Response
	*/
	public function edit(Catalog $catalog)
	{
		//
	}

	/**
	* Update the specified resource in storage.
	*
	* @param  \Illuminate\Http\Request  $request
	* @param  \App\Catalog  $catalog
	* @return \Illuminate\Http\Response
	*/
	public function update(Request $request, Catalog $catalog)
	{
		//
	}

	/**
	* Remove the specified resource from storage.
	*
	* @param  \App\Catalog  $catalog
	* @return \Illuminate\Http\Response
	*/
	public function destroy(Catalog $catalog)
	{
		//
	}
}
