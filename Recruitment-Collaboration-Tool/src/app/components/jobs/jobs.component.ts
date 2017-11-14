import { Component, OnInit } from '@angular/core';
import { JobsServiceService } from "../../services/jobs-service.service";
import { Job } from "../../model/job";
import { DataServiceService } from "../../services/data-service.service";
import { Router, ActivatedRoute } from "@angular/router";

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
    public DataService: DataServiceService,
    private router: Router,
    private route: ActivatedRoute, ) {}

  ngOnInit() {
    console.log("JobsComponent");
    this.jobService.getJobs().subscribe(jobs => {
      this.arAllJobs = jobs;

      this.arAllJobs.forEach(job => {
        if (job.IsArcheive != true) {
          this.arNotArchivedJobs.push(job);
        }
      });
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
    console.log(editJob);
    this.DataService.jobToEdit = editJob;
    this.router.navigate(['/edit-job']);
  }

  archivedJob(archivedJob: Job) {
    window.alert("archivedJob");
    console.log(archivedJob)
  }


}
