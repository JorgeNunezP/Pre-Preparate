import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {Router} from '@angular/router'
import Swal from 'sweetalert2'



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
      localStorage.setItem('id', res.id);
      localStorage.setItem('name', res.name);
      localStorage.setItem('mail', res.mail);
      this.router.navigate(['/profile']);
    },
    err => {console.log(err);
      this.error = err;
      Swal.fire({ title: 'Error!', text: this.error.error, icon: 'error', confirmButtonText: 'Cool' })
      }
    )
  }
}
