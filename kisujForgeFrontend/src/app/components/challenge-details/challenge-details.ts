import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ChallengeService } from '../../services/challenge';
import { Challenge } from '../../models/challenge';

@Component({
  selector: 'app-challenge-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './challenge-details.html',
  styleUrl: './challenge-details.css'
})
export class ChallengeDetails implements OnInit {
  challenge: Challenge | null = null;  // 👈 Egy darab kihívás
  isLoading: boolean = true;
  challengeId: number = 0;

  constructor(
    private challengeService: ChallengeService,
    private route: ActivatedRoute,      // 👈 URL paraméterek olvasásához
    private router: Router               // 👈 Navigációhoz (törlés után vissza a listába)
  ) {}

  ngOnInit(): void {
    // 👇 Kivesszük az :id paramétert az URL-ből (pl. /challenges/5 -> id = 5)
    this.route.params.subscribe(params => {
      this.challengeId = +params['id'];  // 👈 + jel = string -> number konverzió
      this.loadChallenge();
    });
  }

  loadChallenge(): void {
    this.isLoading = true;
    this.challengeService.getById(this.challengeId).subscribe({
      next: (data) => {
        this.challenge = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Hiba:', err);
        this.isLoading = false;
        alert('Nem található a kihívás!');
        this.router.navigate(['/challenges']);  // 👈 Vissza a listába
      }
    });
  }

  deleteChallenge(): void {
    if (!this.challenge?.id) return;
    
    if (confirm(`Biztosan törölni szeretnéd: "${this.challenge.title}"?`)) {
      this.challengeService.delete(this.challenge.id).subscribe({
        next: () => {
          alert('Sikeres törlés!');
          this.router.navigate(['/challenges']);  // 👈 Törlés után lista
        },
        error: (err) => {
          console.error('Törlési hiba:', err);
          alert('Hiba történt a törlés során!');
        }
      });
    }
  }
}
