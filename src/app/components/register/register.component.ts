import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';  // Import ToastrService
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerData = { firstName: '', lastName: '', email: '', password: '' };

  constructor(private router: Router, private toastr: ToastrService) {}

  registerUser() {
    localStorage.setItem('user', JSON.stringify(this.registerData));
    // Show success Toastr message
    this.toastr.success('Registration Successful!', 'Welcome!');
    this.router.navigate(['/login']);
  }
}
