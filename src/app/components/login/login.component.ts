import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';  // Import ToastrService
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData = { email: '', password: '' };

  constructor(private router: Router, private toastr: ToastrService) {}

  loginUser() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.email === this.loginData.email && user.password === this.loginData.password) {
      // Show success Toastr message
      this.toastr.success('Login Successful!', 'Success!');
      this.router.navigate(['/home']);
    } else {
      // Show error Toastr message
      this.toastr.error('Invalid Credentials', 'Error!');
    }
  }
}
