import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CandidateService, Candidate } from '../../services/candidate.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-candidate',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css'],
})
export class CandidateComponent implements OnInit {
  candidates: Candidate[] = [];
  isEditMode = false;
  
  candidate: Candidate = {
    name: '',
    dob: '',
    gender: '',
    address: '',
    party: '',
  };

  constructor(
    private candidateService: CandidateService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.fetchCandidates();
  }

  fetchCandidates() {
    this.candidateService.getAllCandidates().subscribe({
      next: (data) => {
        this.candidates = data;
      },
      error: (error) => {
        this.toastr.error('Failed to fetch candidates', 'Error');
        console.error('Error fetching candidates:', error);
      }
    });
  }

  createCandidate() {
    if (this.isEditMode && this.candidate.id) {
      this.updateCandidate();
      return;
    }

    this.candidateService.createCandidate(this.candidate).subscribe({
      next: () => {
        this.toastr.success('Candidate added successfully', 'Success');
        this.fetchCandidates();
        this.resetForm();
      },
      error: (error) => {
        this.toastr.error('Failed to add candidate', 'Error');
        console.error('Error adding candidate:', error);
      }
    });
  }

  editCandidate(candidate: Candidate) {
    this.isEditMode = true;
    this.candidate = { ...candidate };
    this.toastr.info('Editing candidate', 'Edit Mode');
  }

  updateCandidate() {
    if (!this.candidate.id) return;

    this.candidateService.updateCandidate(this.candidate.id, this.candidate).subscribe({
      next: () => {
        this.toastr.success('Candidate updated successfully', 'Success');
        this.fetchCandidates();
        this.resetForm();
      },
      error: (error) => {
        this.toastr.error('Failed to update candidate', 'Error');
        console.error('Error updating candidate:', error);
      }
    });
  }

  deleteCandidate(id: number) {
    if (confirm('Are you sure you want to delete this candidate?')) {
      this.candidateService.deleteCandidate(id).subscribe({
        next: () => {
          this.toastr.success('Candidate deleted successfully', 'Success');
          this.fetchCandidates();
        },
        error: (error) => {
          this.toastr.error('Failed to delete candidate', 'Error');
          console.error('Error deleting candidate:', error);
        }
      });
    }
  }

  resetForm() {
    this.candidate = {
      name: '',
      dob: '',
      gender: '',
      address: '',
      party: '',
    };
    this.isEditMode = false;
  }

  cancelEdit() {
    this.resetForm();
  }
}