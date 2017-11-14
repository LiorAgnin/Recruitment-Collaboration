import { Component, OnInit } from '@angular/core';
import { ApplicantServiceService } from "../../services/applicant-service.service";
import { Applicant } from "../../model/Applicant";
import { DataServiceService } from "../../services/data-service.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {

  arAllApplicants: Applicant[] = new Array();
  arApplicantStatus: Applicant[] = new Array();
  arUnlockApplicants: Applicant[] = new Array();
  LockUnlock: boolean = false;
  constructor(public applicantService: ApplicantServiceService,
    public DataService: DataServiceService,
    public router: Router) { }

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
  goToApplicantDetail(applicant :Applicant) {
    console.log(applicant);
    this.DataService.jobToEdit = applicant;
    this.router.navigate(['/applicant-detail']);
  }
  lockToggle(applicant: Applicant) {
    applicant.IsActive = !applicant.IsActive;
    this.applicantService.updeteApplicants(applicant);

  }

}
