import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../services/exam.service';
import { LoginService } from '../../services/login.service';
import {Router} from '@angular/router';
import { DevService } from '../../services/dev.service';


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  hideBtn = "";
  hideContainer = "hide";
  avance: any;
  total: any;
  count: any;


  
  constructor(
    private examService: ExamService,
    private loginService: LoginService,
    private devService: DevService,
    private router: Router
  ) { }
  user_id = this.loginService.getId();
  deve = {
    subject_name: '',
    subSub_name: '',
    question_id: '',
    user_id: this.user_id
  }

  result = {
    totalEsp: 0,
    totalMat: 0,
    totalIng: 0,
    totalCie: 0,
    totalHis: 0,
    bienEsp:  0,
    bienMat:  0,
    bienIng: 0,
    bienCie: 0,
    bienHis: 0
  }



  id:any;
  subject: any;
  sub: any;
  mv = []; 
  pregunta: any;
  res1: any;
  res2: any;
  res3: any;
  res4: any;
  correct: any;
  questions = [];
  dev = [];
  exam = [];
  temas = [];
   start(){
    this.avance = 1;
    this.count = 0;
    this.hideBtn = "hide";
    this.hideContainer = "";
    this.arbol()
    this.hello(this.exam) 
  }

  ngOnInit(): void {
    this.getMv();
    this.getQuest();
    this.getDev();
    this.getSub();
  }

  hello(quiz){
    this.id = quiz[this.count]._id;
    this.subject = quiz[this.count].subject;
    this.sub = quiz[this.count].sub;
    this.pregunta = quiz[this.count].question;
    this.res1 = quiz[this.count].answer1;
    this.res2 = quiz[this.count].answer2;
    this.res3 = quiz[this.count].answer3;
    this.res4 = quiz[this.count].answer4;
    this.correct = quiz[this.count].correct;
    if(this.subject === "Español"){
      this.result.totalEsp++;
    }else if(this.subject === "Matematicas"){
      this.result.totalMat++;
    }else if(this.subject === "Ciencias"){
      this.result.totalCie++;
    }else if(this.subject === "Historia"){
      this.result.totalHis++;
    }else if(this.subject === "Ingles"){
      this.result.totalIng++;
    }
    if(this.avance === this.total){
      var esp = (this.result.bienEsp/this.result.totalEsp)*100;
      var mat = (this.result.bienMat/this.result.totalMat)*100;
      var cie = (this.result.bienCie/this.result.totalCie)*100;
      var ing = (this.result.bienIng/this.result.totalIng)*100;
      var his = (this.result.bienHis/this.result.totalHis)*100;
      localStorage.setItem('porEsp', esp.toString());
      localStorage.setItem('porMat', mat.toString());
      localStorage.setItem('porCie', cie.toString());
      localStorage.setItem('porIng', ing.toString());
      localStorage.setItem('porHis', his.toString());
      this.router.navigate(['/result']);
    }
  }

  next(num){
    if(this.correct == num){
      this.deve.subject_name = this.subject;
      this.deve.subSub_name = this.sub;
      this.deve.question_id = this.id;
      if(this.subject === "Español"){
        this.result.bienEsp++;
      }else if(this.subject === "Matematicas"){
        this.result.bienMat++;
      }else if(this.subject === "Ciencias"){
        this.result.bienCie++;
      }else if(this.subject === "Historia"){
        this.result.bienHis++;
      }else if(this.subject === "Ingles"){
        this.result.bienIng++;
      }
      this.devService.saveDev(this.deve)
      .subscribe(
        res => {
          console.log(res)
        },
        err => {console.log(err);
          console.log(err.error);
          }
        )
    }
    this.avance++;
    this.count++;
    this.hello(this.exam);
  }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getMv(){
    this.examService.getMV(this.deve)
    .subscribe(
     res => {
       this.mv = res;
     },
     err => {console.log(err);
       console.log(err.error);
       }
     )
   }

   getQuest(){
    this.examService.getQuest(this.user_id)
    .subscribe(
     res => {
       this.questions = res;
     },
     err => {console.log(err);
      console.log(err.error);
       }
     )
   }

   getDev(){
    this.examService.getDev(this.user_id)
    .subscribe(
     res => {
       this.dev = res;
     },
     err => {console.log(err);
      console.log(err.error);
       }
     )
   }

   getSub(){
    this.examService.getSub()
    .subscribe(
     res => {
       this.temas = res;
     },
     err => {console.log(err);
      console.log(err.error);
       }
     )
   }
  
  arbol(){ 
        /// + Examen general +
        if ( this.dev.length === 0 && this.mv.length === 0) {
            var preguntasGenerales = [];
            var preguntas = [];
            this.temas.forEach(value => {
                     this.questions.forEach( value2 => {
                        if (value2.sub == value.sub) { preguntas.push(value2); }
                    });
                  
                    for (let i = 0; i < 3; i += 1) {
                        var rand = this.getRndInteger(0, preguntas.length);
                        preguntasGenerales.push(preguntas[rand]);
                        preguntas.splice(rand, 1);
                        } 
                        preguntas = [];
                    });
                this.exam = preguntasGenerales; 
                console.log(this.exam)
                this.total = this.exam.length;
            }
             else {
               // + Examen Personalizado +
              this.exam = [];
              var preguntasGenerales = [];
              var preguntas = [];
              console.log(this.mv)
              this.mv.forEach(value => {
              this.questions.forEach(value2 => {
                    let found = false;
                    var i=0;
                    if (value2.sub == value.sub) {
                        found = false;
                        
                        this.dev.forEach(value3 => {
                         
                            if (value3.question_id !== value2._id) {
                                found = true; 
                                
                            }
                        });
                        i++;
                        if (found) { preguntas.push(value2); }
                        console.log(i)
                      }
                    
                });
              preguntasGenerales.push({
                    sub: value.sub,
                    ques: preguntas.slice()
                });
                preguntas = [];
                console.log(preguntasGenerales)
            });
            //  - Ordena de mayor cantidad de preguntas a menor
            preguntasGenerales.sort(function(a, b) { return b.ques.length - a.ques.length });
            var div = preguntasGenerales.length/3;
            var restos = preguntasGenerales.length % 3;
            var cont = 0;
            var cantQ = 3;
            
            for(let i = 0; i < preguntasGenerales.length; i+=1){
             
                if(cantQ === 0 && restos > 0){
                    cantQ +=1;
                } 
                for(let j = 0; j< cantQ; j+=1){
                    var rand = this.getRndInteger(0, preguntasGenerales[i].ques.length);
                    this.exam.push( preguntasGenerales[i].ques[rand] );
                    preguntasGenerales[i].ques.splice(rand, 1);
                }
                cont+=1;
                if(cont === div){
                    cont = 0;
                    cantQ -= 1;
                }
            } 
            console.log(this.exam)
            this.total = this.exam.length;
        }

      }
}
