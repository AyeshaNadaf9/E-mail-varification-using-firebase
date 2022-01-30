import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:FormGroup;
  constructor(private fb:FormBuilder, private auth:AuthService) {
      this.login = this.fb.group({
          user: [null, Validators.compose([Validators.required, Validators.email ]) ],
          pass: [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])]
      });
   }


  ngOnInit(): void {
  }

  submitHandler(data:any) {
      console.log('login =', data);
      this.auth.loginUser(data);
  }

}
