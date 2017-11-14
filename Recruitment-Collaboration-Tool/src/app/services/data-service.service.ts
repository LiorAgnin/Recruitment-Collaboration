import { Injectable } from '@angular/core';
import { Job } from "../model/job";

@Injectable()
export class DataServiceService {

  public jobToEdit: Job;
  public UserLoggedIn: any = "";
  IsUserAuthentication: boolean = false;
  IsUserIsAdmin: boolean = false;

  constructor() { }

  IfAuthentication(user) {
    this.UserLoggedIn = user;
    this.IsUserAuthentication = true;
    this.IfUserIsAdmin();
    window.alert(this.IfUserIsAdmin());
  }

  IfUserIsAdmin(): boolean {

    if (this.UserLoggedIn == "weretawt5@gmail.com" || this.UserLoggedIn == "batchen12498@gmail.com") {
      this.IsUserIsAdmin = true;
      return true;
    }
    else {
      return false;
    }
  }

}
