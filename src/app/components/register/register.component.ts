import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  emp = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
    ])
  });

  constructor(
    private service: EmployeeService,
    private router: Router
  ) {}

  register() {
    if (this.emp.valid) {
      this.service.register(this.emp.value).subscribe({
        next: (res: any) => {
          alert('✅ Employee Registered Successfully');
          console.log('Response:', res);
          this.emp.reset();
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Registration failed:', err);
          alert('❌ Registration failed. Please try again later.');
        }
      });
    } else {
      this.emp.markAllAsTouched();
      alert('⚠️ Please fill out all required fields correctly.');
    }
  }
}
