<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AddBussinessController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Requests\StoreUserRequest;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
})->name("home");

Route::get('/bussinessdetails', function () {
    return Inertia::render('BussinessDetails');
})->name("bussinessdetails");

Route::get('/login', function () {
    return Inertia::render('Login');
})->name("login");

Route::get('/register', function () {
    return Inertia::render('Register');
})->name("register");

// Route::get('/login', function () {
//     return Inertia::render('Login');
// });

Route::get('/addbussiness', function () {
    return Inertia::render('AddBussiness');
})->name("addbussiness");

Route::post('/login',[AuthController:: class,"authenticate"])->name("login");
Route::post('/register',[AuthController:: class,"store"])->name("register")
->middleware([HandlePrecognitiveRequests::class]);
Route::get('/logout',[AuthController:: class,"destroy"])->name("logout");
Route::post('/addbussiness_submit',[AddBussinessController:: class,"store"])->name("addbussiness_submit");
