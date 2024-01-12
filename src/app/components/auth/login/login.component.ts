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
          this.router.navigate(['products']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      alert('fail');
    }
  }
}
