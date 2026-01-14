<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ChallengeController;
use App\Http\Controllers\Api\AuthController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('challenges', ChallengeController::class)->only(['index','show']);

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('challenges', ChallengeController::class)->only(['store','update','destroy']);
    Route::post('logout', [AuthController::class, 'logout']);
});
