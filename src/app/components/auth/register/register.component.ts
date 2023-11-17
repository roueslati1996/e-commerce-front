import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  name!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;

  constructor() {
    // Initialize your properties if needed
  }

  register(): void {
    // Your registration logic here
    console.log(
      'Registering:',
      this.name,
      this.email,
      this.password,
      this.confirmPassword
    );
    // You probably want to add actual logic to handle registration
  }
}
