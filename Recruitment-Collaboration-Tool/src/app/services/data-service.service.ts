import { Injectable } from '@angular/core';
import { Job } from "../model/job";
import { Applicant } from "../model/applicant";
import { Skillset } from "../model/skillset";

@Injectable()
export class DataServiceService {

  public jobToEdit: Job;
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

  constructor() { }

}
