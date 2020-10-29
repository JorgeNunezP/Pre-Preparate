import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectComponent } from './subject.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  declarations: [
    SubjectComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SubjectModule { }
