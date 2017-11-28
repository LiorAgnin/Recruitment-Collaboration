import { Injectable } from '@angular/core';
import { Job } from "../model/job";
import { Applicant } from "../model/applicant";
import { Skillset } from "../model/skillset";
import { skipWhile } from 'rxjs/operator/skipWhile';
import { JobsServiceService } from './jobs-service.service';

@Injectable()
export class DataServiceService {

  public jobToEdit: Job;
  public MatchingJob: Job;
  public applicantToEdit: Applicant;
  arSkillSetPicked: string[] = [];
  SearchInput:string;
  SearchBy:string="";
  
   constructor(public jobService: JobsServiceService) {
      // this.jobService.getJobs().subscribe(jobs => { this.arAllJobs = jobs });
      console.log("arSkillSetPicked");
      console.log(this.arSkillSetPicked);
     }
 


  public arSkillset = ["HTML5", "CSS3", "JavaScript", "Python", "Java", ".NET", "C#", "Angular2", "JQuery", "Json"]


  public HR = [
    { Id: 1, Name: "Shani" },
    { Id: 2, Name: "Or" },
    { Id: 3, Name: "Yael" },
    { Id: 4, Name: "Mor" },
    { Id: 5, Name: "weretawt" }
  ];
  public RecuterManagers = [
    { Id: 1, Name: "Yotam Avivi" },
    { Id: 2, Name: "almog lak" },
    { Id: 3, Name: "Eran Leiser" },
    { Id: 4, Name: "Ronen Wolfson" },
    { Id: 5, Name: "bat-chen" }
  ]

}
