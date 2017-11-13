import { Component, OnInit } from '@angular/core';
import { ApplicantServiceService } from "../../services/applicant-service.service";
import { Applicant } from "../../model/Applicant";
import { DataServiceService } from "../../services/data-service.service";

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
    public dataService: DataServiceService) { }

  ngOnInit() {

    console.log("ApplicantComponent");

    this.applicantService.getApplicants().subscribe(applicant => {
      this.arAllApplicants = applicant;
      console.log(this.arAllApplicants);
    });

    this.applicantService.getApplicantsStatus().subscribe(applicantStatus => {
      this.arApplicantStatus = applicantStatus;
      console.log(this.arApplicantStatus);
    });

    this.arAllApplicants.forEach(applicant => {
      this.arApplicantStatus.forEach(applicantStatus => {

        console.log(applicant);
        console.log(applicantStatus);
        // if(applicant.Id!= applicantStatus.ApplicantId)
      });

    });

    // this.ApplicantServiceService.getApplicantsHistory().subscribe(applicantHistory=>{
    //   // console.log("applicantHistory");
    //   // console.log(applicantHistory);
    // });



    console.log("applicant");


  }

  lockToggle(applicant: Applicant) {
    applicant.IsActive = !applicant.IsActive;
    this.applicantService.updeteApplicants(applicant);

  }

}
