import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  isView:any=false;
  title = 'project1';
  
  constructor(){
    if(localStorage.getItem("inLogin")=="true"){
      this.isView=true;
    }else{
      this.isView=false;
    }
  }
  ngOnInit(): void {
  }
  }
