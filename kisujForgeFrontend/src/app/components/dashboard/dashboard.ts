import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../../services/challenge';
import { Challenge } from '../../models/challenge';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule],  // 👈 Ezek kellenek a *ngIf és *ngFor-hoz
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  challenges: Challenge[] = [];  // 👈 Ide jönnek a kihívások
  activeChallenges: number = 0;  // 👈 Aktív kihívások száma
  totalPoints: number = 0;       // 👈 Összes pont
  isLoading: boolean = true;     // 👈 Betöltés közben true

  constructor(private challengeService: ChallengeService) {}

  ngOnInit(): void {
    // 👇 Amikor betölt az oldal, lekérjük az adatokat
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.isLoading = true;
    
    // 👇 API hívás - getAll() metódus a service-ből
    this.challengeService.getAll().subscribe({
      next: (data) => {
        this.challenges = data;
        
        // 👇 Aktív kihívások számolása
        this.activeChallenges = data.filter(c => c.isActive).length;
        
        // 👇 Összes pont számolása (reduce = összeadás)
        this.totalPoints = data.reduce((sum, c) => sum + c.rewardPoints, 0);
        
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Hiba az adatok betöltésekor:', err);
        this.isLoading = false;
      }
    });
  }
}
