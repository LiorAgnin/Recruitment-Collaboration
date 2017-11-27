import { Injectable } from '@angular/core';
import { Job } from "../model/job";
import { Applicant } from "../model/applicant";
import { Skillset } from "../model/skillset";
import { skipWhile } from 'rxjs/operator/skipWhile';

@Injectable()
export class DataServiceService {

  public jobToEdit: Job;
  public MatchingJob: Job;
  public applicantToEdit: Applicant;

  constructor() {
  }


  public arSkillset = ["HTML5", "CSS3", "JavaScript", "Python", "Java", ".NET", "C#", "Angular2", "JQuery", "Json"]


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

}
