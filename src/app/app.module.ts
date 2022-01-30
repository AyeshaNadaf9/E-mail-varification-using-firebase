import { StudentService } from './services/student.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthService } from './services/auth.service';

import { AngFirebaseModule } from './modules/ang-fire.module';

import { ToastrModule } from "ngx-toastr";
import { CourseComponent } from './components/course/course.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { UpdateCourseComponent } from './components/update-course/update-course.component';
import { CourseService } from './services/course.service';
import { StudentComponent } from './components/student/student.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PnfComponent,
    DashboardComponent,
    CourseComponent,
    CreateCourseComponent,
    UpdateCourseComponent,
    StudentComponent,
    CreateStudentComponent,
    UpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngFirebaseModule,
    ToastrModule.forRoot({
        timeOut: 4000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true
    }),
    BrowserAnimationsModule
  ],
  providers: [AuthService, CourseService,StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
