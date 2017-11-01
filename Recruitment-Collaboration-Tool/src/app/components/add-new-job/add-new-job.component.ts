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
  newJob: Job = <Job>{};
  arSkillset: Skillset[]=[];
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
      Postion:this.newJob.Postion,
      MinimumReqYears:this.newJob.MinimumReqYears,
      Description:this.newJob.Description,
      IsArcheive:false,
      Skills:this.newJob.Skills,
      
    }
    this.jobService.addNewJob(body);
  }
}
