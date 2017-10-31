import { Component, OnInit } from '@angular/core';
import { Job } from '../../model/job';
@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
  show = false;
  editJob: Job = <Job>{};
  
  constructor() { }

  ngOnInit() {
  }

  EditJobs() {
    const body = {
      Postion:this.editJob.Postion,
      MinimumReqYears:this.editJob.MinimumReqYears,
      Description:this.editJob.Description,
      IsArcheive:this.editJob.IsArcheive,
      Skills:this.editJob.Skills,
      
    }
   console.log("addNewJobSubmitHandler")
  }


}