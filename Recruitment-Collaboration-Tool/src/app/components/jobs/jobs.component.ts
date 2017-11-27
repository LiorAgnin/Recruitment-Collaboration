import { Component, OnInit, OnDestroy } from '@angular/core';
import { JobsServiceService } from "../../services/jobs-service.service";
import { Job } from "../../model/job";
import { DataServiceService } from "../../services/data-service.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
<<<<<<< HEAD
import { debug } from 'util';

=======
>>>>>>> bcd5ee7a8f8ae81d22e141d3123096a81cb213c2
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
  arArchivedJobs: Job[] = new Array();
  jobIsArchived: boolean = false;
  subscriptionJob: any;
  constructor(public jobService: JobsServiceService,
    public DataService: DataServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AngularFireAuth,
    private authService: AuthService) { }

<<<<<<< HEAD
  ngOnInit() {
    this.subscriptionJob = this.jobService.getJobs().subscribe(jobs => {
      this.arAllJobs = jobs;
      this.arAllJobs.forEach(job => {
        if (job.IsArcheive != true) {
          this.arNotArchivedJobs.push(job);
        }
      });
    });
=======

  ngOnInit() {
    console.log("jobsComponent");
    this.subscriptionJob = this.jobService.getJobs().subscribe(jobs => {
      console.log("jobs", jobs);

      this.arNotArchivedJobs = jobs.filter(job => { return job.IsArcheive != true; });
      this.arArchivedJobs = jobs.filter(job => { return job.IsArcheive != false; });
      console.log("arNotArchivedJobs", this.arNotArchivedJobs);
      console.log("arArchivedJobs", this.arArchivedJobs);
    });
    this.jobIsArchived = !this.jobIsArchived;
>>>>>>> bcd5ee7a8f8ae81d22e141d3123096a81cb213c2
  }

  ngOnDestroy() {
    this.subscriptionJob.unsubscribe();
  }

  onClickAdddForm($event: Job) {
    // console.log($event);
    this.jobService.addNewJob($event);
    this.addFormBooli = false;
  }
  
  archivedJob(archivedJob: Job) {
    this.arAllJobs.forEach(job => {
      if (job.IsArcheive == false) {
        archivedJob.IsArcheive = true
      }
    });
    this.arAllJobs.push(archivedJob);
    this.jobService.updeteJob(archivedJob)
    archivedJob.IsArcheive = true;
    this.jobService.updeteJob(archivedJob)
    this.jobIsArchived = true;
  }

  unArchivedJob(unArchivedJob: Job) {
    unArchivedJob.IsArcheive = false;
    this.jobService.updeteJob(unArchivedJob)
    this.jobIsArchived = !this.jobIsArchived;
  }

  onClickArchived() {
    this.jobIsArchived = !this.jobIsArchived;
  }

  goToJobDetail(Job) {
    this.DataService.jobToEdit = Job;
    this.DataService.MatchingJob = Job;
    this.router.navigate(['./job-detail'])
  }
}
