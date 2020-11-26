import { Component, OnInit } from '@angular/core';
import { DevService } from '../../services/dev.service';
import { LoginService } from '../../services/login.service';
import { ExamService } from '../../services/exam.service';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit {

  constructor(
    private devService: DevService,
    private loginService: LoginService,
    private examService: ExamService
  ) { }

  ngOnInit(): void {
    /* this.iniciar()  */ 
    this.getDev()
  }

  dev = []; 
  user_id = this.loginService.getId();

  public spanish ={
    palabras: 0,
    gramatica: 0,
    textos: 0,
    verbos: 0,
    alfabeto: 0
  }
  public math ={
    potencias: 0,
    reglas: 0,
    ecuaciones: 0,
    raices: 0,
    operaciones: 0
  }
  public cience ={
    biologia: 0,
    quimica: 0,
    fisica: 0,
    geografia: 0,
    meteorologia: 0
  }
  public history ={
    revM: 0,
    revI: 0,
    ind: 0,
    pre: 0,
    astro: 0
  }
  public english ={
    verbos: 0,
    aux: 0,
    tiempos: 0,
    sujetos: 0,
    numeros: 0
  }

  /* iniciar(){
    //Español
    this.spanish.palabras = 70;
    this.spanish.gramatica = 80;
    this.spanish.textos = 50;
    this.spanish.verbos = 40;
    this.spanish.alfabeto = 70;
    //Matematicas
    this.math.potencias = 60;
    this.math.reglas = 40;
    this.math.ecuaciones = 60;
    this.math.raices = 50;
    this.math.operaciones = 90;
    //Ciencias
    this.cience.biologia = 20;
    this.cience.quimica = 30;
    this.cience.fisica = 40;
    this.cience.geografia = 90;
    this.cience.meteorologia = 60;
    //Historia
    this.history.revM = 10;
    this.history.revI =50;
    this.history.ind = 20;
    this.history.pre = 30;
    this.history.astro = 60;
    //Ingles
    this.english.verbos = 90;
    this.english.aux = 90;
    this.english.tiempos = 90;
    this.english.sujetos = 90;
    this.english.numeros = 90;
  } */

  getDev(){
    this.examService.getDev(this.user_id)
    .subscribe(
     res => {
       this.dev = res;
       this.getEsp()
       this.getMat()
       this.getHis()
       this.getIng()
       this.getCie()
     },
     err => {console.log(err);
      console.log(err.error);
       }
     )
   }

   getEsp(){
    this.dev.forEach(element => {
      if(element.subSub_name === "Palabras"){
        this.spanish.palabras += 10;
      }else if(element.subSub_name === "Gramatica"){
        this.spanish.gramatica += 10;
      }else if(element.subSub_name === "Textos"){
        this.spanish.textos += 10;
      }else if(element.subSub_name === "Verbos"){
        this.spanish.verbos += 10;
      }else if(element.subSub_name === "Alfabeto"){
        this.spanish.alfabeto += 10;
      }
    });
   }

   getMat(){
    this.dev.forEach(element => {
      if(element.subSub_name === "Potencias"){
        this.math.potencias += 10;
      }else if(element.subSub_name === "Reglas de los signos"){
        this.math.reglas += 10;
      }else if(element.subSub_name === "Ecuaciones"){
        this.math.ecuaciones += 10;
      }else if(element.subSub_name === "Raices"){
        this.math.raices += 10;
      }else if(element.subSub_name === "Operaciones basicas"){
        this.math.operaciones += 10;
      }
    });
  }

  getCie(){
    this.dev.forEach(element => {
      if(element.subSub_name === "Biologia"){
        this.cience.biologia += 10;
      }else if(element.subSub_name === "Quimica"){
        this.cience.quimica += 10;
      }else if(element.subSub_name === "Fisica"){
        this.cience.fisica += 10;
      }else if(element.subSub_name === "Geografia"){
        this.cience.geografia += 10;
      }else if(element.subSub_name === "Meteorologia"){
        this.cience.meteorologia += 10;
      }
    });
  }

  getHis(){
    this.dev.forEach(element => {
      if(element.subSub_name === "Revoluvion mexicana"){
        this.history.revM += 10;
      }else if(element.subSub_name === "Revolucion industrial"){
        this.history.revI += 10;
      }else if(element.subSub_name === "Independencia de mexico"){
        this.history.ind += 10;
      }else if(element.subSub_name === "Prehistoria"){
        this.history.pre += 10;
      }else if(element.subSub_name === "Astromia"){
        this.history.astro += 10;
      }
    });
  }

  getIng(){
    this.dev.forEach(element => {
      if(element.subSub_name === "Verbs"){
        this.english.verbos += 10;
      }else if(element.subSub_name === "Auxiliares"){
        this.english.aux += 10;
      }else if(element.subSub_name === "Tiempos"){
        this.english.tiempos += 10;
      }else if(element.subSub_name === "Sujetos"){
        this.english.sujetos += 10;
      }else if(element.subSub_name === "Numeros"){
        this.english.numeros += 10;
      }
    });
  }


}
