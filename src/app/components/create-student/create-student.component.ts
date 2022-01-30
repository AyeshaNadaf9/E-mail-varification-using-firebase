import { StudentService } from './../../services/student.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

   student:FormGroup;

  constructor(private fb:FormBuilder ,private stu :StudentService) {
    this.student=this.fb.group({
      name:[null,Validators.required],
      email:[null,Validators.required],
      mobile:[null,Validators.required],
      address:[null,Validators.required],
    })
   }

  ngOnInit(): void {
  }
  submitHandler(data:any){
    console.log('student=',data);
    this.stu.create(data);
  }

}
