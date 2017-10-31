import { Component, OnInit } from '@angular/core';
import { Job } from '../../model/job';

@Component({
  selector: 'app-add-new-job',
  templateUrl: './add-new-job.component.html',
  styleUrls: ['./add-new-job.component.css']
})
export class AddNewJobComponent implements OnInit {
newJob:Job=<Job>{};

  constructor() {}

  ngOnInit() {
  }
  addNewJobSubmitHandler() {
    const body = {
      Postion:this.newJob.Postion,
      MinimumReqYears:this.newJob.MinimumReqYears,
      Description:this.newJob.Description,
      IsArcheive:this.newJob.IsArcheive,
      Skills:this.newJob.Skills,
      
    }
   console.log("addNewJobSubmitHandler")
  }


}
