import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  constructor(private fs:AngularFirestore, private toast:ToastrService,private route:Router) { }

  getAll() {
    return this.fs.collection('student').snapshotChanges();
  }

  getSingle(id:any) {
      return this.fs.doc(`student/${id}`).valueChanges();
  }

  create(data:any) {
    this.fs.collection('student').add(data).then((res:any) => {
        this.toast.success("New student course Created.");
        this.route.navigate(['/student']);
    }).catch((err:any) => this.toast.error(err.message));
  }

  update(data:any,id:any) {
     this.fs.doc(`/student/${id}`).update(data).then((res:any) => {
          this.toast.success('stusent data updated succesfully');
          this.route.navigate(['/course']);
     }).catch((err:any) => {
        this.toast.error(err.message);
     });
  }

  delete(id:any) {
      this.fs.doc(`/student/${id}`).delete().then((res:any) => {
          this.toast.success("student Deleted successfully");
          this.route.navigate(['/student']);
      }).catch((err:any) => {
        this.toast.error(err.message);
      });
  }
}

