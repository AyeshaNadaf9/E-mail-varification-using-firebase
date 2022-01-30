import { ToastrService } from 'ngx-toastr';
import { StudentService } from './../../services/student.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id:any;
  student:any[]=[];
  constructor( private act:ActivatedRoute,private stu:StudentService,private toast:ToastrService) { 
    this.id=this.act.snapshot.url[2].path;
  }

  ngOnInit(): void {
    this.stu.getSingle(this.id).subscribe((res:any) => {
      this.student = Array.of(res);
      console.log('single student =', res);
    }, (err:any) => {
        this.toast.error(err.message);
    });
  }
  submitHandler(data:any):any {
    console.log("updated data =", data);
    this.stu.update(data, this.id);
  }

}
