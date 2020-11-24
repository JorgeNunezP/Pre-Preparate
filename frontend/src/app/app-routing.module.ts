import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SubjectComponent } from './components/subject/subject.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExamComponent } from './components/exam/exam.component';
import { DevComponent } from './components/dev/dev.component';
import { ResultComponent } from './components/result/result.component';
import { NewSubComponent } from './components/new-sub/new-sub.component';
import { AuthGuard } from './auth.guard';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  {path: '/', component: AboutUsComponent},
  {path: '', component: AboutUsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'subject', component: SubjectComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'exam', component: ExamComponent, canActivate: [AuthGuard]},
  {path: 'dev', component: DevComponent, canActivate: [AuthGuard]},
  {path: 'result', component: ResultComponent, canActivate: [AuthGuard]},
  {path: 'newSub', component: NewSubComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
