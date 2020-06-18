import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Participation } from '../../other/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {

  constructor(private http: HttpClient) { }

  BASE_URL = 'http://localhost:3000';

  getParticipationsProject(projectId: string): Observable<Participation[]>  {
    return this.http.get<Participation[]>(`${this.BASE_URL}/participations/projects/${projectId}`);
  }
  getParticipationsUser(userId: string): Observable<Participation> {
    return this.http.get<Participation>(`${this.BASE_URL}/participations/users/${userId}`);
  }
  createParticipation(participation: Participation): Observable<Participation> {
    return this.http.post<Participation>(`${this.BASE_URL}/participations`, participation);
  }
  deleteParticipation(id: string): Observable<Participation> {
    return this.http.delete<Participation>(`${this.BASE_URL}/participations/${id}`);
  }
}
