import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VoterService {
  private apiUrl = 'http://localhost:8080/api/voters';

  constructor(private http: HttpClient) {}

  getAllVoters(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getVoterById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createVoter(voter: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, voter);
  }

  updateVoter(id: number, voter: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, voter);
  }

  deleteVoter(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
