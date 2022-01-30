import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  reg:FormGroup;
  constructor(private fb:FormBuilder, private auth:AuthService) {
      this.reg = this.fb.group({
          user: [null, Validators.compose([Validators.required, Validators.email ]) ],
          pass: [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])]
      });
   }


  ngOnInit(): void {
  }

  submitHandler(data:any) {
      console.log('register =', data);
      this.auth.registerUser(data);
  }

}
