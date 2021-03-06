<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
	return view('welcome');
});

Route::get('program', function () {
	return view('welcome');
});

Route::get('placement', function () {
	return view('welcome');
});

Route::get('information', function () {
	return view('welcome');
});

Route::get('booking', function () {
	return view('welcome');
});

Route::get('get_catalog', 'Content\CatalogController@ConfirmViaEmail');

Route::get('getInformation', 'Content\InformationController@getAllInformation');

Route::get('getTours', 'Content\TourController@getAllTours');

Route::post('bookTour', 'Content\TourController@bookTour');

Route::resources([
	'catalog' => 'Content\CatalogController',
	'events' => 'Content\EventController',
	'getPlacement' => 'Content\PlacementController',
]);
