import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApplicantService } from "../../services/applicant-service.service";
import { Applicant } from "../../model/Applicant";
import { DataServiceService } from "../../services/data-service.service";
import { Manger } from "../../model/manger";
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import { ApplicantStatusService } from '../../services/applicant-status.service'
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
  goToApplicantDetail(applicant: Applicant) {
    this.dataService.jobToEdit = applicant;
    this.router.navigate(['./applicant-detail']);
  }
}