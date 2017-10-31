import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  error: string;

  constructor() { }

  ngOnInit() {
  }

  submitHandler(myNgForm: any) {
   if(this.formValid()){
     console.log("Valid");
   }
  }

  formValid(): boolean {
    if (this.email == null && this.password == null) {
      this.error = "One or more fields are empty";
      return false;
    }
    else return true;
  }
}
