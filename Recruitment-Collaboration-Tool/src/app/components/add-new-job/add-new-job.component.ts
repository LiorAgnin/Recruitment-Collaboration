import { Component, OnInit } from '@angular/core';
import { JobsServiceService } from "../../services/jobs-service.service";
import { Job } from "../../model/job";

@Component({
  selector: 'app-add-new-job',
  templateUrl: './add-new-job.component.html',
  styleUrls: ['./add-new-job.component.css']
})
export class AddNewJobComponent implements OnInit {
  

  constructor(public jobService: JobsServiceService) { }

  ngOnInit() {
  }

}
