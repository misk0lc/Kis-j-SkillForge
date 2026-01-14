import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChallengeService } from '../../services/challenge';
import { Challenge } from '../../models/challenge';

@Component({
  selector: 'app-challenge-list',
  imports: [CommonModule, RouterModule, FormsModule],  // 👈 FormsModule kell a [(ngModel)]-hez
  templateUrl: './challenge-list.html',
  styleUrl: './challenge-list.css'
})
export class ChallengeList implements OnInit {
  challenges: Challenge[] = [];        // 👈 Eredeti lista
  filteredChallenges: Challenge[] = []; // 👈 Szűrt lista
  isLoading: boolean = true;
  
  // 👇 Szűrő mezők
  selectedDifficulty: string = '';  // EASY, MEDIUM, HARD vagy üres (=mind)
  selectedCategory: string = '';    // CODE, DESIGN, DATA, SOFT vagy üres

  constructor(private challengeService: ChallengeService) {}

  ngOnInit(): void {
    this.loadChallenges();
  }

  loadChallenges(): void {
    this.isLoading = true;
    this.challengeService.getAll().subscribe({
      next: (data) => {
        this.challenges = data;
        this.filteredChallenges = data;  // 👈 Először mindent mutat
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Hiba:', err);
        this.isLoading = false;
      }
    });
  }

  // 👇 Szűrés funkció - amikor változik a select
  applyFilters(): void {
    this.filteredChallenges = this.challenges.filter(challenge => {
      const matchDifficulty = !this.selectedDifficulty || challenge.difficulty === this.selectedDifficulty;
      const matchCategory = !this.selectedCategory || challenge.category === this.selectedCategory;
      return matchDifficulty && matchCategory;
    });
  }

  // 👇 Törlés funkció
  deleteChallenge(id: number | undefined): void {
    if (!id) return;
    
    if (confirm('Biztosan törölni szeretnéd ezt a kihívást?')) {
      this.challengeService.delete(id).subscribe({
        next: () => {
          this.loadChallenges();  // 👈 Újratöltjük a listát
          alert('Sikeres törlés!');
        },
        error: (err) => {
          console.error('Törlési hiba:', err);
          alert('Hiba történt a törlés során!');
        }
      });
    }
  }
}
