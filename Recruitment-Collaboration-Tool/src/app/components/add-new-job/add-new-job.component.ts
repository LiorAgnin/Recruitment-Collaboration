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

  arSkillset: Skillset[] = new Array();
=======
  newJob: Job = <Job>{};
  arSkillset: Skillset[]=[];
>>>>>>> 4a57dee8544f343e9406a3fff2cfe2b5ea0a80d7

  constructor(public jobService: JobsServiceService,
    public SkillsetService: SkillsetServiceService) {}
  ngOnInit() {
    console.log("AddNewJobComponent");

    this.SkillsetService.getSkillsets().subscribe(skills => {
      this.arSkillset = skills;
      console.log(this.arSkillset);
    });

  }
  addNewJobSubmitHandler() {
    const body = {
<<<<<<< HEAD
      Postion: this.newJob.Postion,
      MinimumReqYears: this.newJob.MinimumReqYears,
      Description: this.newJob.Description,
      IsArcheive: false,
      Skills: this.newJob.Skills,

=======
      Postion:this.newJob.Postion,
      MinimumReqYears:this.newJob.MinimumReqYears,
      Description:this.newJob.Description,
      IsArcheive:false,
      Skills:this.newJob.Skills,
      
>>>>>>> 4a57dee8544f343e9406a3fff2cfe2b5ea0a80d7
    }
    this.jobService.addNewJob(body);
  }
}
