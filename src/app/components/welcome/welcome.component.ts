import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'] // or .scss if using Sass
})
export class WelcomeComponent {
  email: string = '';

  constructor(private router: Router) {}

  onEmailCapture(): void {
    if (this.email && this.email.includes('@')) {
      // You can integrate this with your backend email list later
      console.log('Captured email:', this.email);
      alert('Thanks for your interest! We’ll get in touch.');
      this.email = '';
    } else {
      alert('Please enter a valid email address.');
    }
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }
}
