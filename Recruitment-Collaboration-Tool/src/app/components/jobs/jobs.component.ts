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

  FilterByName() {
    this.filteredItems = [];
    if (this.inputName != "") {
      this.arAllJobs.forEach(element => {
        if (element.Postion.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
          this.filteredItems.push(element);
          console.log(element);
        }
      });
    }
    //else {
    //   this.filteredItems = productList;
    // }
    console.log(this.filteredItems);
  }
  editJobToggle(editJob: Job) {
    console.log(editJob);
    this.jobForEdit = editJob;
    this.editFormBooli = true;
    // this.DataService.jobToEdit = editJob;
    // this.router.navigate(['/edit-job']);
  }
  onClickEditForm($event: Job) {
    console.log("$event", $event)
    this.jobService.updeteJob($event);
  }
  onClickAdddForm($event: Job) {
    console.log($event)
    this.jobService.addNewJob($event);
    this.addFormBooli = false;
  }
  archivedJob(archivedJob: Job) {
    console.log(archivedJob)
  }
}
