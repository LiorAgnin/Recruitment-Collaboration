import { Injectable } from '@angular/core';
import { Job } from "../model/job";
import { Applicant } from "../model/applicant";
import { Skillset } from "../model/skillset";
import { JobsServiceService } from './jobs-service.service';
import { skipWhile } from 'rxjs/operator/skipWhile';

@Injectable()
export class DataServiceService {

  public jobToEdit: Job;
  public MatchingJob: Job;
  public applicantToEdit: Applicant;

  public HR = [
    { Id: 1, Name: "Shani" },
    { Id: 2, Name: "Or" },
    { Id: 3, Name: "Yael" },
    { Id: 4, Name: "Mor" },
  ];
  public RecuterManagers = [
    { Id: 1, Name: "Yotam Avivi" },
    { Id: 2, Name: "almog lak" },
    { Id: 3, Name: "Eran Leiser" },
    { Id: 4, Name: "Ronen Wolfson" },
  ]



  arAllJobs: Job[] = new Array();
  RelevantRecruite: any[] = [];
  RelevantJob: Job[] = [];

  UpdatingRecruiterRelevantApplicant() {
    const applicant = {
      FirstName: "hagit",
      LastName: "worke",
      Experience: 3,
      City: "Afula",
      Email: " H@gmail.com",
      PhoneNumber: "05054545",
      Age: 20,
      Gender: "female",
      // CV:,
      Position: 'dsfgdg',
      Skills: ["CSS3", "HTML"]
    };
    let  ApplicantSkill:string;
    //get 
    applicant.Skills.forEach(skill => { ApplicantSkill += skill });
    let SkillExsist: boolean;
    this.arAllJobs.forEach(job => {
      SkillExsist = false;
      SkillExsist = job.Skills.includes(ApplicantSkill);
      if (SkillExsist) {this.RelevantJob.push(job)} });

  // Updating Recruiter In a Relevant Applicant
  window.alert(this.RelevantJob.map((itemInArray) => itemInArray.RecruitingManager));
console.log(this.RelevantJob);
}


constructor(public jobService: JobsServiceService) { this.jobService.getJobs().subscribe(jobs => { this.arAllJobs = jobs }); }

}
