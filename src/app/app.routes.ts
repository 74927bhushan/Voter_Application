import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { VoterComponent } from './components/voter/voter.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { ElectionComponent } from './components/election/election.component';
import { CandidateElectionComponent } from './components/candidate-election/candidate-election.component';
import { VoterElectionCandidateComponent } from './components/voter-election-candidate/voter-election-candidate.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

export const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'voters', component: VoterComponent },
  { path: 'candidates', component: CandidateComponent },
  { path: 'elections', component: ElectionComponent },
  { path: 'candidate-elections', component: CandidateElectionComponent },
  { path: 'voter-election-candidates', component: VoterElectionCandidateComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact-us', component: ContactUsComponent },
];
