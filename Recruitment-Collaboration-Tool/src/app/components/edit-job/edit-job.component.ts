import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Job } from '../../model/job';
=======
import { JobsServiceService } from "../../services/jobs-service.service";
import { Job } from "../../model/job";

>>>>>>> eedb53e156720ab616135b33ee83028ffb8790fb
@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
<<<<<<< HEAD
  show = false;
  editJob: Job = <Job>{};
  
  constructor() { }
=======

  constructor(public jobService: JobsServiceService) { }
>>>>>>> eedb53e156720ab616135b33ee83028ffb8790fb

  ngOnInit() {
  }

<<<<<<< HEAD
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
=======
  updeteJob(jobEdit:Job){
    this.jobService.updeteJob(jobEdit);
  }

}
>>>>>>> eedb53e156720ab616135b33ee83028ffb8790fb
