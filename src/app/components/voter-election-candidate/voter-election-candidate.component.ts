import { Component } from '@angular/core';
import { VoterElectionCandidateService } from '../../services/voter-election-candidate.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voter-election-candidate',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './voter-election-candidate.component.html',
  styleUrls: ['./voter-election-candidate.component.css'],
})
export class VoterElectionCandidateComponent {
  voterElectionCandidates: any[] = [];
  voterElectionCandidate = {
    electionId: null,
    voterId: null,
    candidateElectionId: null,
  };

  constructor(private voterElectionCandidateService: VoterElectionCandidateService) {
    this.fetchVoterElectionCandidates();
  }

  fetchVoterElectionCandidates() {
    this.voterElectionCandidateService.getAllVoterElectionCandidates().subscribe((data) => (this.voterElectionCandidates = data));
  }

  createVoterElectionCandidate() {
    this.voterElectionCandidateService.createVoterElectionCandidate(this.voterElectionCandidate).subscribe(() => {
      this.fetchVoterElectionCandidates();
      this.voterElectionCandidate = { electionId: null, voterId: null, candidateElectionId: null };
    });
  }

  deleteVoterElectionCandidate(id: number) {
    this.voterElectionCandidateService.deleteVoterElectionCandidate(id).subscribe(() => this.fetchVoterElectionCandidates());
  }
}
