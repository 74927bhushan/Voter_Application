import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandidateElectionService {
  private apiUrl = 'http://localhost:8080/api/candidate-elections';

  constructor(private http: HttpClient) {}

  getAllCandidateElections(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCandidateElectionById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createCandidateElection(candidateElection: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, candidateElection);
  }

  updateCandidateElection(id: number, candidateElection: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, candidateElection);
  }

  deleteCandidateElection(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
