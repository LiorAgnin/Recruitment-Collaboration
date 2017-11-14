import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { DataServiceService } from "./data-service.service";
import { Router, ActivatedRoute } from "@angular/router";


@Injectable()
export class LoginServiceService {

  error: string;

  constructor(private auth: AngularFireAuth,
    public DataService: DataServiceService,
    private router: Router,
    private route: ActivatedRoute) { }

  async logIn(email, password) {
    const user= email;
    try {
      let result = await this.auth.auth.signInWithEmailAndPassword(email, password);
      this.DataService.IfAuthentication(user);
      this.router.navigate(['/home']);
      console.log(result)

    } catch (e) {
      console.log(e)
      this.error = e;
    }
  }

  async logOut(){
      let result = await this.auth.auth.signOut();
      this.DataService.IsUserAuthentication=false;
      this.DataService.IsUserIsAdmin=false;
      this.DataService.UserLoggedIn="";
      this.router.navigate(['/home']);
      console.log(result)
  }

}
