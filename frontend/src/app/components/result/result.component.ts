import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 public esp = this.getEsp();
 public mat = this.getMat();
 public cie = this.getCie();
 public his = this.getHis();
 public ing = this.getIng();



 getEsp(){
  var r;
  if(localStorage.getItem('porEsp') == "NaN"){
    r = 0;
  }else{
    r = parseInt(localStorage.getItem('porEsp'));
  }
  localStorage.removeItem('porEsp');
  return r;
 }
 getMat(){
  var r;
  if(localStorage.getItem('porMat') == "NaN"){
    r = 0;
  }else{
    r = parseInt(localStorage.getItem('porMat'));
  }
  localStorage.removeItem('porMat');
  return r;
}
getCie(){
  var r;
  if(localStorage.getItem('porCie') == "NaN"){
    r = 0;
  }else{
    r = parseInt(localStorage.getItem('porCie'));
  }
  localStorage.removeItem('porCie');
  return r;
}
getHis(){
  var r;
  if(localStorage.getItem('porHis') == "NaN"){
    r = 0;
  }else{
    r = parseInt(localStorage.getItem('porHis'));
  }
  localStorage.removeItem('porHis');
  return r;
}
getIng(){
  var r;
  if(localStorage.getItem('porIng') == "NaN"){
    r = 0;
  }else{
    r = parseInt(localStorage.getItem('porIng'));
    localStorage.removeItem('');
  }
  localStorage.removeItem('porIng');
  return r;
}

}
