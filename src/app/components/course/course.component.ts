import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from './../../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course:any[] = [];

  constructor(private route:Router, private cur:CourseService, private toast:ToastrService) { }

  ngOnInit(): void {
      this.getCourseInfo();
      console.log('data =', this.course);
  }

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
    })
  }

  delHandler(id:any) {
      if(window.confirm(`Are you sure to delete course id = ${id}?`)) {
          // this.toast.success("Deleted");
          this.cur.delete(id);
      } else {
        this.toast.warning("delete terminated");
      }
  }

}
