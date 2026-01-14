import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Challenge } from '../models/challenge';

@Injectable({ providedIn: 'root' })
export class ChallengeService {
  private apiUrl = 'http://localhost:8000/api/challenges';

  constructor(private http: HttpClient) {}

  getAll() { return this.http.get<Challenge[]>(this.apiUrl); }
  getById(id: number) { return this.http.get<Challenge>(`${this.apiUrl}/${id}`); }
  create(data: Challenge) { return this.http.post(this.apiUrl, data); }
  update(id: number, data: Challenge) { return this.http.patch(`${this.apiUrl}/${id}`, data); }
  delete(id: number) { return this.http.delete(`${this.apiUrl}/${id}`); }
}