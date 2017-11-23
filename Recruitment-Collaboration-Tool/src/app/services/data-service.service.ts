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
  
   constructor(public jobService: JobsServiceService) {
      this.jobService.getJobs().subscribe(jobs => { this.arAllJobs = jobs });
     }
 

  public arSkillset=["HTML5", "CSS3", "JavaScript", "Python", "Java", ".NET", "C#", "Angular2", "JQuery", "Json"]
  

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


  UpdatingRecruiterRelevantApplicant(applicant:Applicant) {
    let ApplicantSkill: string;
    let SkillExsist: boolean;
  // filter job by Applicant skills
    this.arAllJobs.forEach(job => {
      SkillExsist = true;
      let i;
      for (i = 0; i < applicant.Skills.length; i++) {
        if (!job.Skills.includes(applicant.Skills[i])) {
          SkillExsist = false;
          break;
        }
      }
      if (SkillExsist) { this.RelevantJob.push(job) }
    });
 // filter Recruiting Manager by Relevant Job 
 //   debugger;
    console.log(this.RelevantJob);
    let RecruiterRelevant: boolean;
    this.RecuterManagers.forEach(Recuter => {
      RecruiterRelevant = false;
      this.RelevantJob.forEach(job => { if (job.RecruitingManager == Recuter.Name) { RecruiterRelevant = true;  } });
      if (RecruiterRelevant) { this.RelevantRecruite.push(Recuter); }
    });
    debugger;
    //  RelevantRecruite
    window.alert(this.RelevantRecruite.map((itemInArray) => itemInArray.Name));
    // send email to RelevantRecruite
  }


}
