import { Component } from '@angular/core';
import { CandidateElectionService } from '../../services/candidate-election.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-candidate-election',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './candidate-election.component.html',
  styleUrls: ['./candidate-election.component.css'],
})
export class CandidateElectionComponent {
  candidateElections: any[] = [];
  candidateElection = {
    candidateId: null,
    electionId: null,
  };

  constructor(private candidateElectionService: CandidateElectionService) {
    this.fetchCandidateElections();
  }

  fetchCandidateElections() {
    this.candidateElectionService.getAllCandidateElections().subscribe((data) => (this.candidateElections = data));
  }

  createCandidateElection() {
    this.candidateElectionService.createCandidateElection(this.candidateElection).subscribe(() => {
      this.fetchCandidateElections();
      this.candidateElection = { candidateId: null, electionId: null };
    });
  }

  deleteCandidateElection(id: number) {
    this.candidateElectionService.deleteCandidateElection(id).subscribe(() => this.fetchCandidateElections());
  }
}
