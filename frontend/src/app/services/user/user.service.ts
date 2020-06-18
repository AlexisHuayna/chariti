import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { User } from '../../other/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  BASE_URL = 'http://localhost:3000';

  getUsers(): Observable<User[]>  {
    return this.http.get<User[]>(`${this.BASE_URL}/users`);
  }
  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/users/${id}`);
  }
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/users`, user);
  }
  updateUser(id: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.BASE_URL}/users/${id}`, user);
  }
  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(`${this.BASE_URL}/users/${id}`);
  }
}
