import { Component } from '@angular/core';
import { VoterService } from '../../services/voter.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-voter',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css'],
})
export class VoterComponent {
  voters: any[] = [];
  voter = {
    name: '',
    dob: '',
    gender: '',
    address: '',
  };

  constructor(private voterService: VoterService) {
    this.fetchVoters();
  }

  fetchVoters() {
    this.voterService.getAllVoters().subscribe((data) => (this.voters = data));
  }

  createVoter() {
    this.voterService.createVoter(this.voter).subscribe(() => {
      this.fetchVoters();
      this.voter = { name: '', dob: '', gender: '', address: '' };
    });
  }

  deleteVoter(id: number) {
    this.voterService.deleteVoter(id).subscribe(() => this.fetchVoters());
  }
}
