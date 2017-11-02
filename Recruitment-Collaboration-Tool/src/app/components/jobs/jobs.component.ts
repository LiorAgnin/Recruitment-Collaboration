import { Component, OnInit } from '@angular/core';
import { JobsServiceService } from "../../services/jobs-service.service";
import { Job } from "../../model/job";
import { DataServiceService } from "../../services/data-service.service";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  arAllJobs: Job[] = new Array();
  arNotArchivedJobs: Job[] = new Array();

  showAddJobFrom: boolean = false;

  constructor(public jobService: JobsServiceService,
    public DataService: DataServiceService) { }

  ngOnInit() {
    console.log("JobsComponent");
    this.jobService.getJobs().subscribe(jobs => {
      this.arAllJobs = jobs;

      this.arAllJobs.forEach(job => {
        if (job.IsArcheive != true) {
          this.arNotArchivedJobs.push(job);
        }
      });
      console.log(this.arNotArchivedJobs);
    });

  }

  addnewJob() {
    if (this.showAddJobFrom == true) {
      this.showAddJobFrom = false;
    }
    else {
      this.showAddJobFrom = true;
    }
  }

  EditJob(editJob: Job) {
    this.DataService.jobToEdit=editJob;
    console.log(editJob);
  }

  archivedJob(archivedJob: Job) {
    console.log(archivedJob)
  }

}
