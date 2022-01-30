import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  id:any;
  course: any[] = [];
  constructor(private act: ActivatedRoute, private cur:CourseService, private toast:ToastrService) { 
    this.id = this.act.snapshot.url[2].path;
  }

  ngOnInit(): void {
    this.cur.getSingle(this.id).subscribe((res:any) => {
      this.course = Array.of(res);
      console.log('single course =', res);
    }, (err:any) => {
        this.toast.error(err.message);
    });
  }

  submitHandler(data:any):any {
    console.log("updated data =", data);
    this.cur.update(data, this.id);
  }

}
