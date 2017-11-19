import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  public user;
  userOb: Observable<firebase.User>;
  public UserLoggedIn: any = "";
  IsUserAuthenticated: boolean = false;
  constructor(private auth: AngularFireAuth,
    private router: Router) {
    this.auth.authState.subscribe((user: firebase.User) => {
      if (user) {
        this.user = user.email;
        this.IsUserAuthenticated = true;
        this.userOb = this.auth.authState;
      }
    })
  }

  public login(email, password) {
    this.auth.auth.signInWithEmailAndPassword(email, password);
    this.IsUserAuthenticated = true;
    this.router.navigate(['/home']);
  }

  public logout() {
    this.auth.auth.signOut();
    this.IsUserAuthenticated = false;
    this.router.navigate(['/login']);
  }

  public isAuthenticated(): boolean {
    return this.IsUserAuthenticated;
  }
  
  public isUserAdmin(): boolean {
    if (this.user == "weretawt5@gmail.com" || this.user == "batchen12498@gmail.com") {
      return true;
    }
    else {
      return false;
    }
  }
}
