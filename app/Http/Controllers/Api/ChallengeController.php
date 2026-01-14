<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Challenge;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class ChallengeController extends Controller
{
    public function index(): JsonResponse
    {
        $challenges = Challenge::all();
        return response()->json($challenges);
    }

    public function show($id): JsonResponse
    {
        $challenge = Challenge::find($id);
        if (! $challenge) {
            return response()->json(['message' => 'Not Found'], 404);
        }
        return response()->json($challenge);
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'category' => 'nullable|in:CODE,DESIGN,DATA,SOFT',
            'difficulty' => 'nullable|in:EASY,MEDIUM,HARD',
            'reward_points' => 'required|integer|min:10|max:500',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'is_active' => 'nullable|boolean',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();
        // map reward_points to points for backward compatibility
        if (isset($data['reward_points'])) {
            $data['points'] = $data['reward_points'];
        }
        $challenge = Challenge::create($data);
        return response()->json($challenge, 201);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $challenge = Challenge::find($id);
        if (! $challenge) {
            return response()->json(['message' => 'Not Found'], 404);
        }

        $validator = Validator::make($request->all(), [
            'title' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'category' => 'nullable|in:CODE,DESIGN,DATA,SOFT',
            'difficulty' => 'nullable|in:EASY,MEDIUM,HARD',
            'reward_points' => 'sometimes|required|integer|min:10|max:500',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date|after_or_equal:start_date',
            'is_active' => 'nullable|boolean',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = $validator->validated();
        if (isset($data['reward_points'])) {
            $data['points'] = $data['reward_points'];
        }
        $challenge->update($data);
        return response()->json($challenge);
    }

    public function destroy($id): JsonResponse
    {
        $challenge = Challenge::find($id);
        if (! $challenge) {
            return response()->json(['message' => 'Not Found'], 404);
        }
        $challenge->delete();
        return response()->json(null, 204);
    }
}
