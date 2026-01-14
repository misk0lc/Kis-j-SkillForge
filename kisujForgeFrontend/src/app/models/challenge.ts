export interface Challenge {
  id?: number;
  title: string;
  category: 'CODE' | 'DESIGN' | 'DATA' | 'SOFT';
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  reward_points: number;  // Backend snake_case formátum
  start_date: string;     // Backend snake_case formátum
  end_date: string;       // Backend snake_case formátum
  is_active: boolean;     // Backend snake_case formátum
  description: string;
}