import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from './../../services/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userlogin = {
    username: '',
    password: ''
  };

  constructor(
    private service: EmployeeService,
    private router: Router
  ) {}

  login() {
    if (this.userlogin.username && this.userlogin.password) {
      this.service.login(this.userlogin).subscribe((res: any) => {
        if (res) {
          alert('Login successful');
          console.log(res);
          this.router.navigate(['/dashboard']); // ✅ Navigate on success
        } else {
          alert('Invalid username or password'); // ❌ If no user matched
        }
      });
    } else {
      alert('Please enter both username and password');
    }
  }
}
