import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { ApplicantStatusService } from './applicant-status.service';
import { ApplicantStatus } from '../model/applicant-status';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class AuthService {
  public user;
  public error: string = "";
  userOb: Observable<firebase.User>;
  public UserLoggedIn: any = "";
  IsUserAuthenticated: boolean = false;
  arApplicantStatus: ApplicantStatus[] = [];
  constructor(private auth: AngularFireAuth,
    private router: Router,
    public statusService: ApplicantStatusService,
    private afs: AngularFirestore) {
    this.auth.authState.subscribe((user: firebase.User) => {
      if (user) {
        this.user = user.email;
        this.IsUserAuthenticated = true;
        this.userOb = this.auth.authState;
      }
    });
    this.statusService.getApplicantStatus().subscribe(statusDocs => {
      this.arApplicantStatus = statusDocs;
    })
  }

  public async login(email, password) {
    const user = email;
    try {
      let result = await this.auth.auth.signInWithEmailAndPassword(email, password);
      this.IsUserAuthenticated = true;
      this.router.navigate(['/home']);

    } catch (e) {
      this.error = e.message
      this.router.navigate(['/login']);
    }
  }

  public logout() {
    this.auth.auth.signOut();
    this.IsUserAuthenticated = false;
    this.router.navigate(['/home']);
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
  public IsApplicantLockedByManager(applicant) {
    let currentManager = this.auth.auth.currentUser.uid;
    console.log(applicant.Id, currentManager)
    let a = this.afs.collection('ApplicantStatus', ref =>
      ref.where('ApplicantId', '==', applicant.Id)
        .where('ManagerId', '==', currentManager));
    a.valueChanges();
    console.log(a, a.valueChanges());
  }
}
