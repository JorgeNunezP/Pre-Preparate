import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    name: '',
    mail: '',
    pass: '',
    pass2: '',
    admin: false
  }
  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }
  title = 'Pre-Preparate'
  public error: any; 
  signUp(){
    this.registerService.signUp(this.user)
    .subscribe(
     res => {
      Swal.fire(
        'Good job!',
        'Usuario Creado."',
        'success'
      )
       console.log(res)
     },
     err => {console.log(err);
      this.error = err;
      Swal.fire({ title: 'Error!', text: this.error.error, icon: 'error', confirmButtonText: 'Cool' })
      }
     )
   }
}
