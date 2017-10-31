import { Component, OnInit } from '@angular/core';
import { JobsServiceService } from "../../services/jobs-service.service";
import { Job } from "../../model/job";
import { SkillsetServiceService } from "../../services/skillset-service.service";
import { Skillset } from '../../model/skillset';
@Component({
  selector: 'app-add-new-job',
  templateUrl: './add-new-job.component.html',
  styleUrls: ['./add-new-job.component.css']
})
export class AddNewJobComponent implements OnInit {
<<<<<<< HEAD
newJob:Job=<Job>{};
  constructor() { }
=======
  newJob: Job = <Job>{};

  arSkillset: Skillset[] = new Array();
>>>>>>> eedb53e156720ab616135b33ee83028ffb8790fb

  constructor(public jobService: JobsServiceService,
    public SkillsetService: SkillsetServiceService) {
  }
  ngOnInit() {

    console.log("AddNewJobComponent");

    this.SkillsetService.getSkillsets().subscribe(skills => {
      this.arSkillset = skills;
      console.log(this.arSkillset);
    });

  }
  addNewJobSubmitHandler() {
    const body = {
      Postion: this.newJob.Postion,
      MinimumReqYears: this.newJob.MinimumReqYears,
      Description: this.newJob.Description,
      IsArcheive: true,
      Skills: this.newJob.Skills,

    }
    console.log("addNewJobSubmitHandler");
  }


}
