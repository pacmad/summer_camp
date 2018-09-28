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
	return view('program');
});

Route::get('get_catalog', 'Content\CatalogController@ConfirmViaEmail');

Route::resources([
	'catalog' => 'Content\CatalogController',
	'events' => 'Content\EventController',
	'placement' => 'Content\PlacementController'
]);
