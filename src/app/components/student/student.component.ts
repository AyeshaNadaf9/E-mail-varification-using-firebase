import { ToastrService } from 'ngx-toastr';
import { StudentService } from 'src/app/services/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students:any[] = [];
  constructor( private stu:StudentService,private toast:ToastrService) { }

  ngOnInit(): void {
    this.getStudentInfo();
  }
  getStudentInfo() {
    this.stu.getAll().subscribe((res:any) => {
       this.students = res.map((e:any) => {
         return {
           id: e.payload.doc.id,
           name: e.payload.doc.data()['name'],
           email: e.payload.doc.data()['email'],
           mobile: e.payload.doc.data()['mobile'],
           address: e.payload.doc.data()['address'],
         };
       });
    })
  }
  delHandler(id:any) {
    if(window.confirm(`Are you sure to delete student id = ${id}?`)) {
        // this.toast.success("Deleted");
        this.stu.delete(id);
    } else {
      this.toast.warning("delete terminated");
    }
}
}
