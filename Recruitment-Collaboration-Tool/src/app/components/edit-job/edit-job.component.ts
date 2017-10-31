import { Component, OnInit } from '@angular/core';
import { JobsServiceService } from "../../services/jobs-service.service";
import { Job } from "../../model/job";

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {

  constructor(public jobService: JobsServiceService) { }

  ngOnInit() {
  }

  updeteJob(jobEdit:Job){
    this.jobService.updeteJob(jobEdit);
  }

}
