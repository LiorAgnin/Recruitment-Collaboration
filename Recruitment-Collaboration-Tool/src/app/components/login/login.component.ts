import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { DataServiceService } from "../../services/data-service.service";
import { Router, ActivatedRoute } from "@angular/router";
import { LoginServiceService } from "../../services/login-service.service";
import { AuthService } from "../../services/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  error: string;

  constructor(private auth: AngularFireAuth,
    private LoginService: LoginServiceService, private authService: AuthService) { }

  ngOnInit() { }

  submitHandler(myNgForm: any) {
    if (this.formValid()) {
      this.authService.login(this.email, this.password);
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
