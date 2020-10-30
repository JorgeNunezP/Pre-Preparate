import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectComponent } from './subject/subject.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ExamComponent } from './exam/exam.component';
import { DevComponent } from './dev/dev.component';
import { ResultComponent } from './result/result.component';
import { NewSubComponent } from './new-sub/new-sub.component';

const routes: Routes = [
  {path: 'subject', component: SubjectComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'exam', component: ExamComponent},
  {path: 'dev', component: DevComponent},
  {path: 'result', component: ResultComponent},
  {path: 'newSub', component: NewSubComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
