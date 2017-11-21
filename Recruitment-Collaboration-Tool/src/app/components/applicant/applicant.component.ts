import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApplicantService } from "../../services/applicant-service.service";
import { Applicant } from "../../model/Applicant";
import { DataServiceService } from "../../services/data-service.service";
import { Manger } from "../../model/manger";
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import { ApplicantStatusService } from '../../services/applicant-status.service'
import { ApplicantStatus } from '../../model/Applicant-Status';

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
  addFormToggle: boolean = false;
  arStatus: ApplicantStatus[] = [];
  constructor(public applicantService: ApplicantService,
    public dataService: DataServiceService,
    private auth: AngularFireAuth,
    private router: Router,
    public authService: AuthService,
    public statusService: ApplicantStatusService) { }

  ngOnInit() {

    console.log("ApplicantComponent");

    this.applicantService.getApplicants().subscribe(applicant => {
      this.arAllApplicants = applicant;
      console.log(this.arAllApplicants);
    });

    this.statusService.getApplicantStatus().subscribe(applicantStatus => {
      this.arStatus = applicantStatus;
      console.log(this.arStatus);
    });

    // this.arAllApplicants.forEach(applicant => {
    //   this.arApplicantStatus.forEach(applicantStatus => {
    //   });
    // });
  }
  goToApplicantDetail(applicant: Applicant) {
    this.dataService.jobToEdit = applicant;
    this.router.navigate(['./applicant-detail']);
  }
  lock(applicant) {
    let isLockedByMe: boolean = false;
    let currentManagerId = this.auth.auth.currentUser.uid;
    this.arStatus.forEach(appli => {
      if ((appli.ApplicantId == applicant.Id) && (appli.MangerId == currentManagerId)) {
        isLockedByMe = true;
      }
    })
    console.log(isLockedByMe)
    return isLockedByMe;
  }
}