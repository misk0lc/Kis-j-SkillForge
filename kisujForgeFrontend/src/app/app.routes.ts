import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { ChallengeList } from './components/challenge-list/challenge-list';
import { ChallengeForm } from './components/challenge-form/challenge-form';
import { ChallengeDetails } from './components/challenge-details/challenge-details';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'challenges', component: ChallengeList },
  { path: 'challenges/add', component: ChallengeForm },        // 👈 Statikus útvonal előbb!
  { path: 'challenges/:id/edit', component: ChallengeForm },   // 👈 Paraméteresek utána!
  { path: 'challenges/:id', component: ChallengeDetails },
];