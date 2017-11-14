import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "./services/data-service.service";
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute } from "@angular/router";
import { LoginServiceService } from "./services/login-service.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public DataService: DataServiceService,
    private LoginService:LoginServiceService){}

  ngOnInit() {}

 logOut(){
   this.LoginService.logOut();
 }

}
