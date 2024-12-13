import { Component } from '@angular/core';
import { ElectionService } from '../../services/election.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-election',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css'],
})
export class ElectionComponent {
  elections: any[] = [];
  election = {
    electionType: '',
  };

  constructor(private electionService: ElectionService) {
    this.fetchElections();
  }

  fetchElections() {
    this.electionService.getAllElections().subscribe((data) => (this.elections = data));
  }

  createElection() {
    this.electionService.createElection(this.election).subscribe(() => {
      this.fetchElections();
      this.election = { electionType: '' };
    });
  }

  deleteElection(id: number) {
    this.electionService.deleteElection(id).subscribe(() => this.fetchElections());
  }
}
