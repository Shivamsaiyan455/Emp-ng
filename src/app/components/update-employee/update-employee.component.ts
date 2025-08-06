import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  emp!: FormGroup;
  id!: string;

  constructor(
    private service: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;

    // Initialize empty form

    this.emp = new FormGroup({
      id:  new FormControl(''),
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

    // Fetch existing employee data and patch into form
    this.service.getempById(this.id).subscribe(res => {
      this.emp.patchValue({
         id:res.id,
        name: res.name,
        email: res.email,
        password: res.password
      });
    });
  }

  updateEmployee() {
    if (this.emp.valid) {
      console.log('==============updated======================');
      console.log(this.emp.value);
      console.log('====================================');

      this.service.updateEmployee(this.emp.value).subscribe(res => {
        if (res) {
          alert('✅ Employee Updated');
          this.router.navigateByUrl('/dashboard');
        } else {
          alert('❌ Something went wrong');
        }
      });
    } else {
      this.emp.markAllAsTouched();
      alert('⚠️ Please correct the form before submitting.');
    }
  }
}
