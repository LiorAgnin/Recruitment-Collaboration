import { Component, OnInit, ViewEncapsulation, Input, Output,Inject } from '@angular/core';
import { Job } from '../../model/job';
import { JobsServiceService } from "../../services/jobs-service.service";
import { DataServiceService } from "../../services/data-service.service";
import { SkillsetServiceService } from '../../services/skillset-service.service';
import { Skillset } from '../../model/skillset';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import {BrowserModule, DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';
import 'firebase/storage';
@Component({
  selector: 'app-applicant-detail',
  templateUrl: './applicant-detail.component.html',
  styleUrls: ['./applicant-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [AngularFireAuth]
})
export class ApplicantDetailComponent implements OnInit {
  applicant: any;
  arSkillset: any;
  newArSkillSet: Skillset[] = [];
  arSkillSetPicked: string[] = [];
  viewWordFile:any;
  passUrl=this.viewWordFile;
  page:number = 1;
  pageurl:SafeResourceUrl;
  getCvOf:any;
  constructor(public jobService: JobsServiceService,
    public DataService: DataServiceService,
    public SkillsetService: SkillsetServiceService,
    private router: Router,
    private route: ActivatedRoute, private auth: AngularFireAuth,
    firebaseApp: FirebaseApp,private domSanitizer:DomSanitizer ) {
    this.applicant = DataService.jobToEdit;
    this.getCvOf = (this.applicant.FirstName + " " + this.applicant.LastName + ' CV').toLocaleLowerCase()
    const storageRef = firebaseApp.storage().ref().child('/uploads/' + this.getCvOf);
    storageRef.getDownloadURL().then(url => this.viewWordFile = url);
  }

  ngOnInit() {
    this.pageurl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.passUrl);
    
  }

  downloadCV() {
 
    var url=this.viewWordFile;
    open(url);
  }
 
}
