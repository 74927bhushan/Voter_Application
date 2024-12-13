import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ElectionService {
  private apiUrl = 'http://localhost:8080/api/elections';

  constructor(private http: HttpClient) {}

  getAllElections(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getElectionById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createElection(election: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, election);
  }

  updateElection(id: number, election: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, election);
  }

  deleteElection(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
