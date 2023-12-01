import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

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

  constructor(public auth: AuthService) {}

  registerHandler() {
    console.log(
      'clicked',
      this.firstName + this.lastName + this.email + this.password
    );
    if (this.firstName && this.lastName && this.email && this.password) {
      this.auth
        .register(this.firstName, this.lastName, this.email, this.password)
        .subscribe({
          next: (data) => {
            console.log(data);
          },
          error: (err) => {
            console.log(err);
          },
        });
      // Successful register, navigate to the dashboard or home page
      // You can use Angular Router for navigation
    } else {
      // Handle register failure (e.g., show an error message)
      alert('fail');
    }
  }
}
