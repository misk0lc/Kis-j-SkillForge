import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ChallengeService } from '../../services/challenge';
import { Challenge } from '../../models/challenge';

@Component({
  selector: 'app-challenge-form',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './challenge-form.html',
  styleUrl: './challenge-form.css'
})
export class ChallengeForm implements OnInit {
  // 👇 Űrlap modell (kötjük a [(ngModel)]-hez)
  challenge: Challenge = {
    title: '',
    category: 'CODE',
    difficulty: 'EASY',
    rewardPoints: 0,
    startDate: '',
    endDate: '',
    isActive: true,
    description: ''
  };

  isEditMode: boolean = false;  // 👈 Szerkesztés vagy létrehozás?
  isLoading: boolean = false;
  challengeId: number | null = null;

  constructor(
    private challengeService: ChallengeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // 👇 Ha van :id paraméter → Szerkesztés mód
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.challengeId = +params['id'];
        this.loadChallenge();
      }
    });
  }

  loadChallenge(): void {
    if (!this.challengeId) return;
    
    this.isLoading = true;
    this.challengeService.getById(this.challengeId).subscribe({
      next: (data) => {
        this.challenge = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Hiba:', err);
        alert('Nem található a kihívás!');
        this.router.navigate(['/challenges']);
      }
    });
  }

  onSubmit(): void {
    // 👇 Validáció
    if (!this.validateForm()) {
      return;
    }

    this.isLoading = true;

    if (this.isEditMode && this.challengeId) {
      // 👇 FRISSÍTÉS
      this.challengeService.update(this.challengeId, this.challenge).subscribe({
        next: () => {
          alert('Sikeres frissítés!');
          this.router.navigate(['/challenges', this.challengeId]);
        },
        error: (err) => {
          console.error('Hiba:', err);
          alert('Hiba történt a frissítés során!');
          this.isLoading = false;
        }
      });
    } else {
      // 👇 LÉTREHOZÁS
      this.challengeService.create(this.challenge).subscribe({
        next: (response: any) => {
          alert('Sikeres létrehozás!');
          this.router.navigate(['/challenges']);
        },
        error: (err) => {
          console.error('Hiba:', err);
          alert('Hiba történt a létrehozás során!');
          this.isLoading = false;
        }
      });
    }
  }

  validateForm(): boolean {
    // 👇 Kötelező mezők ellenőrzése
    if (!this.challenge.title.trim()) {
      alert('A cím kötelező!');
      return false;
    }

    if (this.challenge.rewardPoints <= 0) {
      alert('A pontszámnak pozitívnak kell lennie!');
      return false;
    }

    if (!this.challenge.startDate || !this.challenge.endDate) {
      alert('Mindkét dátum kötelező!');
      return false;
    }

    // 👇 FONTOS: Dátum validáció (endDate ne legyen korábbi, mint startDate)
    if (this.challenge.endDate < this.challenge.startDate) {
      alert('A befejezés dátuma nem lehet korábbi, mint a kezdés!');
      return false;
    }

    return true;
  }
}
