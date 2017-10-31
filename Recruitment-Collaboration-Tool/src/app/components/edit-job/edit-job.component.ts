import { Component, OnInit } from '@angular/core';
import { JobsServiceService } from "../../services/jobs-service.service";
import { Job } from "../../model/job";

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
  show = false;
  editJob: Job = <Job>{};

  constructor(public jobService: JobsServiceService) { }

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
    console.log("addNewJobSubmitHandler")
  }
  updeteJob(jobEdit: Job) {
    this.jobService.updeteJob(jobEdit);
  }



}

