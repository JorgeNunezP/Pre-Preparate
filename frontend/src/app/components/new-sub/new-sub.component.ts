import { Component, OnInit } from '@angular/core';
import { NewSubService } from '../../services/new-sub.service';

@Component({
  selector: 'app-new-sub',
  templateUrl: './new-sub.component.html',
  styleUrls: ['./new-sub.component.css']
})
export class NewSubComponent implements OnInit {

  constructor(
    private newSubService: NewSubService
  ) { }

  ngOnInit(): void {
  }

  question = {
    subject: '',
    sub: '',
    question: '',
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    correct: ''
  }
    public error: any;
    public message: any;
    
  saveQuestion(){
    this.newSubService.saveQuestion(this.question)
    .subscribe(
     res => {
       this.message = "La contraseña ha sido cambiada.";
       console.log(res)
      
     },
     err => {console.log(err);
      this.error = err;
      }
     )
  }
}
