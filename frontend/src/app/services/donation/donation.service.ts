import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Donation } from '../../other/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http: HttpClient) { }

  BASE_URL = 'http://localhost:8000';

  getLastDonations(): Observable<Donation[]> {
    return this.http.get<Donation[]>(`${this.BASE_URL}/donations`);
  }
  getUserDonationsOnProject(projectId: string, userId: string): Observable<Donation[]> {
    return this.http.get<Donation[]>(`${this.BASE_URL}/donations/${projectId}/${userId}`);
  }
  getDonationsProject(projectId: string): Observable<Donation[]>  {
    return this.http.get<Donation[]>(`${this.BASE_URL}/donations/projects/${projectId}`);
  }
  getDonationsUser(userId: string): Observable<Donation[]> {
    return this.http.get<Donation[]>(`${this.BASE_URL}/donations/users/${userId}`);
  }
  createDonation(donation: Donation): Observable<Donation> {
    return this.http.post<Donation>(`${this.BASE_URL}/donations`, donation);
  }
  updateDonation(id: string, donation: Donation): Observable<Donation> {
    return this.http.put<Donation>(`${this.BASE_URL}/donations/${id}`, donation);
  }
  deleteDonation(id: string): Observable<Donation> {
    return this.http.delete<Donation>(`${this.BASE_URL}/donations/${id}`);
  }
}
