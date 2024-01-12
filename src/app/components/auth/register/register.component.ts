import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  constructor(public auth: AuthService, public router: Router) {}

  registerHandler() {
    if (this.firstName && this.lastName && this.email && this.password) {
      this.auth
        .register(this.firstName, this.lastName, this.email, this.password)
        .subscribe({
          next: (data) => {
            this.router.navigate(['/auth/login']);
          },
          error: (err) => {
            alert(JSON.stringify(err.error.errors));
          },
        });
    } else {
      alert('fail');
    }
  }
}
