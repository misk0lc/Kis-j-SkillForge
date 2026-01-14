<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Challenge;

class ChallengeSeeder extends Seeder
{
    public function run()
    {
        $items = [
            ['title' => '30 Days Algorithm', 'description' => 'Daily algorithm problems for 30 days', 'category' => 'CODE', 'difficulty' => 'HARD', 'reward_points' => 300, 'start_date' => now()->toDateString(), 'end_date' => now()->addDays(30)->toDateString(), 'is_active' => true],
            ['title' => 'HTML Basics 7 Days', 'description' => 'Learn HTML in a week', 'category' => 'DESIGN', 'difficulty' => 'EASY', 'reward_points' => 50, 'start_date' => now()->toDateString(), 'end_date' => now()->addDays(7)->toDateString(), 'is_active' => true],
            ['title' => 'Data Cleaning', 'description' => 'Practical data cleaning tasks', 'category' => 'DATA', 'difficulty' => 'MEDIUM', 'reward_points' => 150, 'start_date' => now()->toDateString(), 'end_date' => now()->addDays(14)->toDateString(), 'is_active' => true],
            ['title' => 'UI Design Principles', 'description' => 'Design better user interfaces', 'category' => 'DESIGN', 'difficulty' => 'MEDIUM', 'reward_points' => 120, 'start_date' => now()->subDays(5)->toDateString(), 'end_date' => now()->addDays(10)->toDateString(), 'is_active' => true],
            ['title' => 'Soft Skills for Devs', 'description' => 'Improve communication and teamwork', 'category' => 'SOFT', 'difficulty' => 'EASY', 'reward_points' => 40, 'start_date' => now()->toDateString(), 'end_date' => now()->addDays(21)->toDateString(), 'is_active' => true],
            ['title' => 'Machine Learning Intro', 'description' => 'Hands-on ML tasks', 'category' => 'DATA', 'difficulty' => 'HARD', 'reward_points' => 400, 'start_date' => now()->toDateString(), 'end_date' => now()->addDays(60)->toDateString(), 'is_active' => true],
        ];

        foreach ($items as $item) {
            Challenge::create([
                'title' => $item['title'],
                'description' => $item['description'] ?? null,
                'category' => $item['category'] ?? 'CODE',
                'difficulty' => $item['difficulty'] ?? 'EASY',
                'reward_points' => $item['reward_points'] ?? 0,
                'points' => $item['reward_points'] ?? 0,
                'start_date' => $item['start_date'] ?? null,
                'end_date' => $item['end_date'] ?? null,
                'is_active' => $item['is_active'] ?? true,
            ]);
        }
    }
}
