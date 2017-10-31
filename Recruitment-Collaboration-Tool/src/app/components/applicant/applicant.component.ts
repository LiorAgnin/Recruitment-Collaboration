import { Component, OnInit } from '@angular/core';
import { ApplicantServiceService } from "../../services/applicant-service.service";
import { Applicant } from "../../model/Applicant";

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {

  arAllApplicants:Applicant[]=new Array();

  constructor(public ApplicantServiceService: ApplicantServiceService) { }

  ngOnInit() {

    console.log("ApplicantComponent");
    this.ApplicantServiceService.getApplicants().subscribe(applicant=>{
      this.arAllApplicants=applicant;
      // console.log("applicant");
      // console.log(this.arAllApplicants);
    });

    this.ApplicantServiceService.getApplicantsStatus().subscribe(applicantStatus=>{
      // console.log("applicantStatus");
      // console.log(applicantStatus);
    });

    this.ApplicantServiceService.getApplicantsHistory().subscribe(applicantHistory=>{
      // console.log("applicantHistory");
      // console.log(applicantHistory);
    });
  }

}
