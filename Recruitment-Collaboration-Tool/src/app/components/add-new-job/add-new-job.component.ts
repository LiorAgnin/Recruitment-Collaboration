import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { JobsServiceService } from "../../services/jobs-service.service";
import { Job } from "../../model/job";
import { SkillsetServiceService } from "../../services/skillset-service.service";
import { Skillset } from '../../model/skillset';
=======
import { Job } from '../../model/job';
>>>>>>> c3de82fa3520f7ef5c7c70b95baf45c5ad4c665e

@Component({
  selector: 'app-add-new-job',
  templateUrl: './add-new-job.component.html',
  styleUrls: ['./add-new-job.component.css']
})
export class AddNewJobComponent implements OnInit {
newJob:Job=<Job>{};

<<<<<<< HEAD
  arSkillset: Skillset[] = new Array();

  constructor(public jobService: JobsServiceService,
    public SkillsetService: SkillsetServiceService) {
     }
=======
  constructor() {}
>>>>>>> c3de82fa3520f7ef5c7c70b95baf45c5ad4c665e

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
      IsArcheive:this.newJob.IsArcheive,
      Skills:this.newJob.Skills,
      
    }
   console.log("addNewJobSubmitHandler")
  }


}
