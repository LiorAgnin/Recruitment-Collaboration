import { Component, OnInit } from '@angular/core';
import { JobsServiceService } from "../../services/jobs-service.service";
import { Job } from "../../model/job";
@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
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

  ngOnInit() {
  }

  EditJobs() {
    const body = {
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

