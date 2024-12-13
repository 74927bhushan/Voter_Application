import { Component } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-candidate',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css'],
})
export class CandidateComponent {
  candidates: any[] = [];
  candidate = {
    name: '',
    dob: '',
    gender: '',
    address: '',
    party: '',
  };

  constructor(private candidateService: CandidateService) {
    this.fetchCandidates();
  }

  fetchCandidates() {
    this.candidateService.getAllCandidates().subscribe((data) => (this.candidates = data));
  }

  createCandidate() {
    this.candidateService.createCandidate(this.candidate).subscribe(() => {
      this.fetchCandidates();
      this.candidate = { name: '', dob: '', gender: '', address: '', party: '' };
    });
  }

  deleteCandidate(id: number) {
    this.candidateService.deleteCandidate(id).subscribe(() => this.fetchCandidates());
  }
}
