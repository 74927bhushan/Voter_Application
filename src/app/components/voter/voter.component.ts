import { Component } from '@angular/core';
import { VoterService } from '../../services/voter.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css'],
})
export class VoterComponent {
  voters: any[] = [];
  voter = {
    id: null, // Ensure there's an id field for update
    name: '',
    dob: '',
    gender: '',
    address: '',
  };

  constructor(private voterService: VoterService, private toastr: ToastrService) {
    this.fetchVoters();
  }

  fetchVoters() {
    this.voterService.getAllVoters().subscribe((data) => {
      this.voters = data;
    });
  }

  createVoter() {
    this.voterService.createVoter(this.voter).subscribe(
      () => {
        this.fetchVoters();
        this.resetForm();
        this.toastr.success('Voter added successfully!', 'Success');
      },
      (error) => {
        this.toastr.error('Something went wrong!', 'Error');
      }
    );
  }

  deleteVoter(id: number) {
    this.voterService.deleteVoter(id).subscribe(
      () => {
        this.fetchVoters();
        this.toastr.success('Voter deleted successfully!', 'Success');
      },
      (error) => {
        this.toastr.error('Failed to delete voter!', 'Error');
      }
    );
  }

  updateVoter(id: number) {
    this.voterService.getVoterById(id).subscribe(
      (voter) => {
        this.voter = { ...voter }; // Populate form with the selected voter's data
        this.toastr.info('Editing voter', 'Info');
      },
      (error) => {
        this.toastr.error('Error fetching voter details', 'Error');
      }
    );
  }

  saveUpdatedVoter() {
    if (this.voter.id) {
      this.voterService.updateVoter(this.voter.id, this.voter).subscribe(
        () => {
          this.fetchVoters();
          this.resetForm();
          this.toastr.success('Voter updated successfully!', 'Success');
        },
        (error) => {
          this.toastr.error('Error updating voter!', 'Error');
        }
      );
    }
  }

  resetForm() {
    this.voter = { id: null, name: '', dob: '', gender: '', address: '' };
  }
}
