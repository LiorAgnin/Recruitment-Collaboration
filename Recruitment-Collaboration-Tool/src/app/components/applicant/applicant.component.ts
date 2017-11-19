import { Component, OnInit } from '@angular/core';
import { ApplicantServiceService } from "../../services/applicant-service.service";
import { Applicant } from "../../model/Applicant";
import { DataServiceService } from "../../services/data-service.service";
import { Manger } from "../../model/manger";
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css'],
  providers: [AngularFireAuth]
})
export class ApplicantComponent implements OnInit {

  arAllApplicants: Applicant[] = new Array();
  arApplicantStatus: Applicant[] = new Array();
  arUnlockApplicants: Applicant[] = new Array();
  manger: string;
  LockUnlock: boolean = false;
  constructor(public applicantService: ApplicantServiceService,
    public dataService: DataServiceService,
    private auth: AngularFireAuth,
    private router: Router) { }

  ngOnInit() {

    console.log("ApplicantComponent");

    this.applicantService.getApplicants().subscribe(applicant => {
      this.arAllApplicants = applicant;
      //console.log(this.arAllApplicants);
    });

    this.applicantService.getApplicantsStatus().subscribe(applicantStatus => {
      this.arApplicantStatus = applicantStatus;
      //console.log(this.arApplicantStatus);
    });

    this.arAllApplicants.forEach(applicant => {
      this.arApplicantStatus.forEach(applicantStatus => {
      });
    });
  }
  goToApplicantDetail(applicant) {
    this.dataService.jobToEdit = applicant;
    this.router.navigate(['./applicant-detail'])
  }
  lockToggle(applicant: Applicant, manger: Manger) {
    console.log("My email", this.auth.auth.currentUser.email)
    if (this.auth.auth.currentUser.email == 'weretawt5@gmail.com') {
      applicant.IsActive = !applicant.IsActive;
      this.applicantService.updeteApplicants(applicant);
      this.manger = 'weretawt5@gmail.com';
    }
  }

}
