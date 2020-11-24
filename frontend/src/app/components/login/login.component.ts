import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
  mail: '',
  pass: '',
}

  constructor(
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  title = 'Pre-Preparate'
  public error: any; 
  signIn(){
   this.loginService.signIn(this.user)
   .subscribe(
    res => {
      console.log(res)
      localStorage.setItem('token', res.token);
      this.router.navigate(['/profile']);
    },
    err => {console.log(err);
      this.error = err;
      }
    )
  }
}
