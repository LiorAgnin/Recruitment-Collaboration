import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { Job } from '../../model/job';
import { JobsServiceService } from "../../services/jobs-service.service";
import { DataServiceService } from "../../services/data-service.service";
import { SkillsetServiceService } from '../../services/skillset-service.service';
import { Skillset } from '../../model/skillset';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

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
  cvDisplay: any;
  constructor(public jobService: JobsServiceService,
    public DataService: DataServiceService,
    public SkillsetService: SkillsetServiceService,
    private router: Router,
    private route: ActivatedRoute, private auth: AngularFireAuth) {
    this.applicant = DataService.jobToEdit;
  }

  ngOnInit() {
    console.log("Applicant Detail Component")
  }
  
  downloadCV() {
    let getCvOf = (this.applicant.FirstName + " " + this.applicant.LastName + ' CV').toLocaleLowerCase()
    let a = this.auth.app.storage().ref('/uploads/' + getCvOf);
    a.getDownloadURL().then(function (url) {
      console.log(url);
    }).catch(function (error) {
      console.log(error)
    });
  }
}
