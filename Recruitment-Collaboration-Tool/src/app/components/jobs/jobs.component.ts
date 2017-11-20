import { Component, OnInit } from '@angular/core';
import { JobsServiceService } from "../../services/jobs-service.service";
import { Job } from "../../model/job";
import { DataServiceService } from "../../services/data-service.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  arAllJobs: Job[] = new Array();
  arNotArchivedJobs: Job[] = new Array();
  showAddJobFrom: boolean = false;
  inputName: string = '';
  filteredItems: Job[];
  jobForEdit: Job;
  editFormBooli: boolean = false;
  addFormBooli: boolean = false;
  
  constructor(public jobService: JobsServiceService,
    public DataService: DataServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

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
  onClickAdddForm($event: Job) {
    this.jobService.addNewJob($event);
    this.addFormBooli = false;
  }
  archivedJob(archivedJob: Job) {
    console.log(archivedJob)
  }

  goToJobDetail(Job){
    this.DataService.jobToEdit = Job;
    this.router.navigate(['./job-detail'])
  }
}
