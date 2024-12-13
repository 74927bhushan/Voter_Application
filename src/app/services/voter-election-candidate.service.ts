import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VoterElectionCandidateService {
  private apiUrl = 'http://localhost:8080/api/voter-election-candidates';

  constructor(private http: HttpClient) {}

  getAllVoterElectionCandidates(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getVoterElectionCandidateById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createVoterElectionCandidate(voterElectionCandidate: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, voterElectionCandidate);
  }

  updateVoterElectionCandidate(id: number, voterElectionCandidate: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, voterElectionCandidate);
  }

  deleteVoterElectionCandidate(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
