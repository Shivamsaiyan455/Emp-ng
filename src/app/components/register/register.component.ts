import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = new FormGroup({
    username  : new FormControl('',[Validators.required,Validators.minLength(3)]),
    password: new FormControl('', [
  Validators.required,
  Validators.minLength(8),
  Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
]),

    age : new FormControl('',[Validators.required,Validators.min(18)]),
    email : new FormControl('',[Validators.required,Validators.email])

  }

  )

  register() {
    if (this.user.valid) {
      alert('Registration Complete');
      console.log(this.user.value);
    } else {
      this.user.markAllAsTouched();
      alert('Please correct the errors before submitting');
    }

}
}
