import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubjectComponent } from './subject/subject.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { ExamComponent } from './exam/exam.component';
import { DevComponent } from './dev/dev.component';
import { ResultComponent } from './result/result.component';
import { NewSubComponent } from './new-sub/new-sub.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ProfileComponent,
    ExamComponent,
    DevComponent,
    ResultComponent,
    NewSubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
