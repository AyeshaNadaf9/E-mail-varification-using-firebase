import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  constructor(private fs:AngularFirestore, private toast:ToastrService,private route:Router) { }

  getAll() {
    return this.fs.collection('course').snapshotChanges();
  }

  getSingle(id:any) {
      return this.fs.doc(`course/${id}`).valueChanges();
  }

  create(data:any) {
    this.fs.collection('course').add(data).then((res:any) => {
        this.toast.success("New Course Created.");
        this.route.navigate(['/course']);
    }).catch((err:any) => this.toast.error(err.message));
  }

  update(data:any,id:any) {
     this.fs.doc(`/course/${id}`).update(data).then((res:any) => {
          this.toast.success('course successfully updated');
          this.route.navigate(['/course']);
     }).catch((err:any) => {
        this.toast.error(err.message);
     });
  }

  delete(id:any) {
      this.fs.doc(`/course/${id}`).delete().then((res:any) => {
          this.toast.success("Course Deleted successfully");
          this.route.navigate(['/course']);
      }).catch((err:any) => {
        this.toast.error(err.message);
      });
  }
}
