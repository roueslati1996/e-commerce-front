import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(public auth: AuthService, public router: Router) {}

  loginHandler() {
    if (this.email && this.password) {
      this.auth.login(this.email, this.password).subscribe({
        next: (data: any) => {
          localStorage.setItem('token', data.data.accessToken);
        },
        error: (err) => {
          console.log(err);
        },
      });

      this.router.navigate(['products']);

      // Successful login, navigate to the dashboard or home page
      // You can use Angular Router for navigation
    } else {
      // Handle login failure (e.g., show an error message)
      alert('fail');
    }
  }
}
