import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userService: Observable<any>;
  constructor(private auth: AngularFireAuth, private route: Router, private toast:ToastrService) { 
      this.userService = this.auth.authState;
  }

  /* register */
  async registerUser(data:any) {
      await this.auth.createUserWithEmailAndPassword(data.user,data.pass).then((res:any) => {
        this.sendVerification();
        this.toast.success("User registered successfully.");
        this.route.navigate(['/login']);
      }).catch((err:any) => {
        this.toast.error(err.message);
      });
  }

  /* login */  
  async loginUser(data:any) {
    await this.auth.signInWithEmailAndPassword(data.user,data.pass).then((res:any) => {
      if(res.user?.emailVerified !== true) {
          this.sendVerification();
      } else {
          //success
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("isLogin", JSON.stringify(true));
          this.toast.success("Successfully Login.");
          this.route.navigate(['/home']);
      }
    }).catch((err:any) => this.toast.error(err.message));
  }

  /* logout */
  async logOut() {
    await this.auth.signOut().then((res:any) => {
      this.toast.success("Successfully Logout.");
      localStorage.clear();
      this.route.navigate(['/login']);
    }).catch((err:any) => this.toast.error(err.message));
  }

  /* sending verfication mail */
  async sendVerification() {
    return (await this.auth.currentUser)?.sendEmailVerification().then((res:any) => {
      this.toast.success("verification email sent successfully.");
      this.toast.warning("Check your inbox/span folder to verify email id.");
    }).catch((err:any) => {
      this.toast.error(err.message);
    });
  }
}
