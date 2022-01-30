import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { StudentComponent } from './components/student/student.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateCourseComponent } from './components/update-course/update-course.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
          path: 'home',
          component: DashboardComponent
    },
    {
         path: 'course',
         component: CourseComponent
    },
    {
        path: 'course/new',
        component: CreateCourseComponent
    },
    {
        path: 'course/edit/:id',
        component: UpdateCourseComponent
    },
    {
         path: 'student',
         component: StudentComponent
    },
    {
        path: 'student/new',
        component: CreateStudentComponent
    },
    {
        path: 'student/edit/:id',
        component: UpdateStudentComponent
    },
    {
        path: '**',
        component: PnfComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
