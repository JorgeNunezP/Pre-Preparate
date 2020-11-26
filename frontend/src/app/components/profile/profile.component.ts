import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private userId: LoginService,
    private profileService: ProfileService,
 
  ) { }

  ngOnInit(): void {
  }
  public error: any; 

  user = {
    id: this.userId.getId(),
    name: this.userId.getName(),
    mail: this.userId.getMail(),
    pass: '',
    pass2: ''

  }

  changePass(){
    this.profileService.editUser(this.user)
    .subscribe(
     res => {
       Swal.fire(
        'Good job!',
        'La contraseña ha sido cambiada."',
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
