import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  course:any[] = [];
  constructor(private auth:AuthService, private route:Router, private cur:CourseService) { }

  getCourseInfo() {
      this.cur.getAll().subscribe((res:any) => {
        this.course = res.map((e:any) => {
          return {
            id: e.payload.doc.id,
            title: e.payload.doc.data()['title'],
            fee: e.payload.doc.data()['fee'],
            duration: e.payload.doc.data()['duration'],
          };
        });
      });
  }

  ngOnInit(): void {
    if(localStorage.getItem("isLogin") === null) {
        this.route.navigate(['/login']);
    }
    this.getCourseInfo();
  }

  logoutHandler() {
      this.auth.logOut();
  }

}
