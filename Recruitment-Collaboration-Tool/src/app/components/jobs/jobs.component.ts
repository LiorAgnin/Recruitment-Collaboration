import { Component, OnInit } from '@angular/core';
import { JobsServiceService } from "../../services/jobs-service.service";
import { Job } from "../../model/job";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  arAllJobs:Job[]=new Array();

  constructor(public jobService: JobsServiceService) { }

  ngOnInit() {
    console.log("JobsComponent");
    this.jobService.getJobs().subscribe(jobs=>{
      this.arAllJobs=jobs;

      // console.log(this.arAllJobs);
      
    });
   
  }

}
