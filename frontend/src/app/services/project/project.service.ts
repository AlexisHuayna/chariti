import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Project } from '../../other/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  BASE_URL = 'http://localhost:8000';

  getProject(id: string): Observable<Project> {
    return this.http.get<Project>(`${this.BASE_URL}/projects/${id}`);
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.BASE_URL}/projects`);
  }

  getProjectAmount(id: string): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/projects/amount/${id}`);
  }

  getOwnerProjects(userId: string): Observable<Project[]>  {
    return this.http.get<Project[]>(`${this.BASE_URL}/projects/owners/${userId}`);
  }

  createProject(project: Project) {
    return this.http.post<Project>(`${this.BASE_URL}/projects`, project);
  }
  updateProject(id: string, project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.BASE_URL}/projects/${id}`, project);
  }
  deleteProject(id: string): Observable<Project> {
    return this.http.delete<Project>(`${this.BASE_URL}/projects/${id}`);
  }

}
