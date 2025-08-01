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

  user = new FormGroup({
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
    if (this.user.valid) {
      this.service.register(this.user.value).subscribe((res: any) => {
        alert('Employee Added ');
        console.log(res);
        this.user.reset();
        this.router.navigate(['/login']);
      });
    } else {
      this.user.markAllAsTouched();
      alert('Please correct the errors before submitting');
    }
  }
}
