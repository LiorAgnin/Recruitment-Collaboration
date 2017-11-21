import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { ApplicantService } from '../../services/applicant-service.service';
import { Applicant } from "../../model/Applicant";
import { Job } from "../../model/job";


@Component({
  selector: 'app-matching-applicants-to-job',
  templateUrl: './matching-applicants-to-job.component.html',
  styleUrls: ['./matching-applicants-to-job.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MatchingApplicantsToJobComponent implements OnInit {

  arrApplicantsMatching: Applicant[] = [];
  arAllApplicants: Applicant[] = [];
  jobSkils: string[] = [];

  constructor(public DataService: DataServiceService,
    public applicantService: ApplicantService) { }

  ngOnInit() {
    this.jobSkils = this.DataService.MatchingJob.Skills;
    console.log(this.jobSkils);
    this.applicantService.getApplicants().subscribe(applicant => {
      this.arAllApplicants = applicant;
      console.log(this.arAllApplicants);
      let index;
      let pushAllApplicant = true;
      this.arAllApplicants.forEach(applicant => {
        //debugger;
        for (index = 0; index < this.jobSkils.length; index++) {
          if (!applicant.Skills.includes(this.jobSkils[index])) {
            pushAllApplicant = false;
            break;
          }
        }
        if (pushAllApplicant) {
          this.arrApplicantsMatching.push(applicant);
          console.log(this.arrApplicantsMatching);
        }
      });
      
    });

    
  }

}
