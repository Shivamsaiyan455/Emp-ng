import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private router:Router){

  }
  username ='';
  password = '';

  login(){
    if(this.username === 'sam123' && this.password==='1234'){
           this.router.navigateByUrl('/admin-dashboard')
    }
    else {
      alert("Invalid Credentilas")
    }


  }
}
