import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';


import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(
    private userId: LoginService,
    private subjectService: SubjectService
    ) { }

  ngOnInit(): void {
  }

  subjSpaPal = {
    name: 'Español',
    sub: 'Palabras',
    user_id: this.userId.getId()
  }

  subjSpaGram = {
    name: 'Español',
    sub: 'Gramatica',
    user_id: this.userId.getId()
  }

  subjSpaTex = {
    name: 'Español',
    sub: 'Textos',
    user_id: this.userId.getId()
  }
  subjSpaVerb = {
    name: 'Español',
    sub: 'Verbos',
    user_id: this.userId.getId()
  }
  subjSpaAlf = {
    name: 'Español',
    sub: 'Alfabeto',
    user_id: this.userId.getId()
  }
  subjMatPot = {
    name: 'Matematicas',
    sub: 'Potencias',
    user_id: this.userId.getId()
  }
  subjMatReg = {
    name: 'Matematicas',
    sub: 'Reglas de los signos',
    user_id: this.userId.getId()
  }
  subjMatEcu = {
    name: 'Matematicas',
    sub: 'Ecuaciones',
    user_id: this.userId.getId()
  }
  subjMatRai = {
    name: 'Matematicas',
    sub: 'Raices',
    user_id: this.userId.getId()
  }
  subjMatOpe = {
    name: 'Matematicas',
    sub: 'Operaciones basicas',
    user_id: this.userId.getId()
  }
  subjCieBio = {
    name: 'Ciencias',
    sub: 'Biologia',
    user_id: this.userId.getId()
  }
  subjCieQui = {
    name: 'Ciencias',
    sub: 'Quimica',
    user_id: this.userId.getId()
  }
  subjCieFis = {
    name: 'Ciencias',
    sub: 'Fisica',
    user_id: this.userId.getId()
  }
  subjCieGeo = {
    name: 'Ciencias',
    sub: 'Geografia',
    user_id: this.userId.getId()
  }
  subjCieMet = {
    name: 'Ciencias',
    sub: 'Metereologia',
    user_id: this.userId.getId()
  }
  subjHisRevM = {
    name: 'Historia',
    sub: 'Revolucion mexicana',
    user_id: this.userId.getId()
  }
  subjHisRevI = {
    name: 'Historia',
    sub: 'Revolucion industrial',
    user_id: this.userId.getId()
  }
  subjHisInd = {
    name: 'Historia',
    sub: 'Independencia de mexico',
    user_id: this.userId.getId()
  }
  subjHisPre = {
    name: 'Historia',
    sub: 'Prehistoria',
    user_id: this.userId.getId()
  }
  subjHisAst = {
    name: 'Historia',
    sub: 'Astronomia',
    user_id: this.userId.getId()
  }
  subjIngVerb = {
    name: 'Ingles',
    sub: 'Verbs',
    user_id: this.userId.getId()
  }
  subjIngAux = {
    name: 'Ingles',
    sub: 'Auxiliares',
    user_id: this.userId.getId()
  }
  subjIngTie = {
    name: 'Ingles',
    sub: 'Tiempos',
    user_id: this.userId.getId()
  }
  subjIngSuj = {
    name: 'Ingles',
    sub: 'Sujetos',
    user_id: this.userId.getId()
  }
  subjIngNum = {
    name: 'Ingles',
    sub: 'Numeros',
    user_id: this.userId.getId()
  }
  public error: string;
  saveSubjSpaPal(){
    this.subjectService.save(this.subjSpaPal)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
   saveSubjSpaGram(){
    this.subjectService.save(this.subjSpaGram)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
   saveSubjSpaTex(){
    this.subjectService.save(this.subjSpaTex)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
   saveSubjSpaVerb(){
    this.subjectService.save(this.subjSpaVerb)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
   saveSubjSpaAlf(){
    this.subjectService.save(this.subjSpaAlf)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
   saveSubjMatPot(){
    this.subjectService.save(this.subjMatPot)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
   saveSubjMatReg(){
    this.subjectService.save(this.subjMatReg)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
   saveSubjMatEcu(){
    this.subjectService.save(this.subjMatEcu)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
   saveSubjMatRai(){
    this.subjectService.save(this.subjMatRai)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
   saveSubjMatOpe(){
    this.subjectService.save(this.subjMatOpe)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
   saveSubjCieBio(){
    this.subjectService.save(this.subjCieBio)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
   saveSubjCieQui(){
    this.subjectService.save(this.subjCieQui)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
   saveSubjCieFis(){
    this.subjectService.save(this.subjCieFis)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
   saveSubjCieGeo(){
    this.subjectService.save(this.subjCieGeo)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
   saveSubjCieMet(){
    this.subjectService.save(this.subjCieMet)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
   saveSubjHisRevM(){
    this.subjectService.save(this.subjHisRevM)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
   saveSubjHisRevI(){
    this.subjectService.save(this.subjHisRevI)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
   saveSubjHisInd(){
    this.subjectService.save(this.subjHisInd)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
   saveSubjHisPre(){
    this.subjectService.save(this.subjHisPre)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
   saveSubjHisAst(){
    this.subjectService.save(this.subjHisAst)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
   saveSubjIngVerb(){
    this.subjectService.save(this.subjIngVerb)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
   saveSubjIngAux(){
    this.subjectService.save(this.subjIngAux)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
   saveSubjIngTie(){
    this.subjectService.save(this.subjIngTie)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
   saveSubjIngSuj(){
    this.subjectService.save(this.subjIngSuj)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
   saveSubjIngNum(){
    this.subjectService.save(this.subjIngNum)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {console.log(err);
       this.error = err;
       }
     )
   }
}
