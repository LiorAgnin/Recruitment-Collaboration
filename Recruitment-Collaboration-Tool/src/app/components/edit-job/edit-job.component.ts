import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { JobsServiceService } from "../../services/jobs-service.service";
import { Job } from "../../model/job";
=======
import { Job } from '../../model/job';
import { JobsServiceService } from "../../services/jobs-service.service";

>>>>>>> 4a57dee8544f343e9406a3fff2cfe2b5ea0a80d7
@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
<<<<<<< HEAD
  editJob: Job = <Job>{};
  EJob:Job ={
    Description:"ava",
    Id:"LmX7Zm2bwS0esUOoop0K",
    IsArcheive:false,
    MinimumReqYears:3,
    Postion:"Java",
    Skills:["css"],
  };
  
  constructor(public service: JobsServiceService) { }
=======

  show = false;
  editJob: Job = <Job>{};

  constructor(public jobService: JobsServiceService) { }
>>>>>>> 4a57dee8544f343e9406a3fff2cfe2b5ea0a80d7

  ngOnInit() {
  }

  EditJobs() {
    const body = {
<<<<<<< HEAD
      Postion: this.editJob.Postion,
      MinimumReqYears: this.editJob.MinimumReqYears,
      Description: this.editJob.Description,
      IsArcheive: false,
      Skills: this.editJob.Skills,

    }

  }
  updeteJob(jobEdit: Job) {
    this.service.updeteJob(jobEdit);
  }

}

=======
      Postion:this.editJob.Postion,
      MinimumReqYears:this.editJob.MinimumReqYears,
      Description:this.editJob.Description,
      IsArcheive:false,
      Skills:this.editJob.Skills,
      
    }
    this.jobService.updeteJob(body);
  }
}
 


>>>>>>> 4a57dee8544f343e9406a3fff2cfe2b5ea0a80d7
