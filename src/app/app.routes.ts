import { Routes } from '@angular/router';
import { VoterComponent } from './components/voter/voter.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { ElectionComponent } from './components/election/election.component';
import { CandidateElectionComponent } from './components/candidate-election/candidate-election.component';
import { VoterElectionCandidateComponent } from './components/voter-election-candidate/voter-election-candidate.component';

export const routes: Routes = [
  { path: '', redirectTo: '/voters', pathMatch: 'full' },
  { path: 'voters', component: VoterComponent },
  { path: 'candidates', component: CandidateComponent },
  { path: 'elections', component: ElectionComponent },
  { path: 'candidate-elections', component: CandidateElectionComponent },
  { path: 'voter-election-candidates', component: VoterElectionCandidateComponent },
];
