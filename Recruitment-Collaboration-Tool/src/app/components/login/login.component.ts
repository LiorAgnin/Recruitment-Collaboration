import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AngularFireAuth]
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  error: string;

  constructor(private auth: AngularFireAuth) { 
  }

  ngOnInit() {

  }
  async signUp(email, password) {
    try {
      let result = await this.auth.auth.createUserWithEmailAndPassword(email, password);
      console.log(result)

    } catch (e) {
      console.log(e)
    }
  }
  submitHandler(myNgForm: any) {
    if (this.formValid()) {
      console.log("Valid");
      this.signUp(this.email, this.password);
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
