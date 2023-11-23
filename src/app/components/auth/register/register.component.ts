import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  login() {
    // Implement your login logic here
    if (this.email === 'user@example.com' && this.password === 'password') {
      // Successful login, navigate to the dashboard or home page
      // You can use Angular Router for navigation
    } else {
      // Handle login failure (e.g., show an error message)
    }
  }
}
