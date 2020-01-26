<?php

use App\Appointment;
use App\Doctor;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/surgery', function () {
    return Doctor::where('department', 'surgery')->get();
});

Route::get('/diagnostic', function () {
    return Doctor::where('department', 'diagnostic')->get();
});

Route::get('/dentistry', function () {
    return Doctor::where('department', 'dentistry')->get();
});

Route::post('/appointments', function (Request $request) {
    return Appointment::where('date', $request->get('date'))->get();
});

Route::post('/appointment', function (Request $request) {
    $user = User::where('token', $request->get('token'));
    if ($user->exists()) {
        $user = $user->first();
        $record = new Appointment();
        $record->date = $request->get('date');
        $record->hour = $request->get('time');
        $record->user_id = $user->id;
        $record->doctor_id = $request->get('doctor');

        if (!(Appointment::where([
            ['date', $record->date],
            ['hour', $record->hour]
        ])->exists()))
            $record->save();
    }
});

Route::post('/nickname', function (Request $request) {
    if (User::where('name', $request->get('nickname'))->exists())
        return "true";
    else
        return "false";
});

Route::post('/register', function (Request $request) {
    $user = new User();

    $user->name = $request->get('nickname');
    $user->password = md5($request->get('password'));

    $user->save();

    return "ok";
});

Route::post('/auth', function (Request $request) {
    $nickname = $request->get('nickname');
    $password = $request->get('password');

    $user = User::where([
        ['name', '=', $nickname],
        ['password', '=', md5($password)]
    ]);

    if ($user->exists()) {
        $user = $user->first();
        $token = Hash::make($user->name);
        $user->token = $token;
        $user->update();
        return $token;
    }
    return '';
});

Route::post('/me', function (Request $request) {
    $token = $request->get('token');
    $user = User::where('token', $token);

    if ($user->exists())
        return $user->first()->name;
    return '';
});

Route::post('/logout', function (Request $request) {
    $user = User::where('token', $request->get('token'));
    if ($user->exists()) {
        $user = $user->first();
        $user->token = null;
        $user->update();
    }
});
