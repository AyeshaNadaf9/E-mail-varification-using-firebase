import { CourseService } from './../../services/course.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  
  course:FormGroup;

  constructor(private fb:FormBuilder,private cur :CourseService) {
    this.course=this.fb.group({
      title:[null,Validators.required],
      fee:[null,Validators.required],
      duration:[null,Validators.required]
    });
   }

  ngOnInit(): void {
  }
 submitHandler(data:any){
   console.log('data=',data);
   this.cur.create(data);
 }
}
