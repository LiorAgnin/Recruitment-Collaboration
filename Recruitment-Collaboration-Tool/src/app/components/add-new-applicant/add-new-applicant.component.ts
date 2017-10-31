import { Component, OnInit } from '@angular/core';
import { ApplicantServiceService } from "../../services/applicant-service.service";
import { Applicant } from "../../model/Applicant";

@Component({
  selector: 'app-add-new-applicant',
  templateUrl: './add-new-applicant.component.html',
  styleUrls: ['./add-new-applicant.component.css']
})
export class AddNewApplicantComponent implements OnInit {

  constructor(public ApplicantServiceService:ApplicantServiceService) { }

  ngOnInit() {

  }

}
