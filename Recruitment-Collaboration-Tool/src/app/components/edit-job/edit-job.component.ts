import { Component, OnInit } from '@angular/core';
import { Job } from '../../model/job';
import { JobsServiceService } from "../../services/jobs-service.service";
import { DataServiceService } from "../../services/data-service.service";
import { SkillsetServiceService } from '../../services/skillset-service.service';
import { Skillset } from '../../model/skillset';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {

  show = false;
  editJob: Job = <Job>{};
  arSkillset: any;
  newArSkillSet: Skillset[] = []

  constructor(public jobService: JobsServiceService,
    public DataService: DataServiceService,
    public SkillsetService: SkillsetServiceService) {
    this.editJob = DataService.jobToEdit;
  }
  skil;
  ngOnInit() {
    this.SkillsetService.getSkillsets().subscribe(skills => {
      this.arSkillset = skills[0];
      this.arSkillset.skillset.forEach(element => {
        const skil = { name: element, selected: false };
        this.newArSkillSet.push(skil);
      });
    });
    

    console.log(this.newArSkillSet);
  }

  EditJobs() {
    const body = {
      Postion: this.editJob.Postion,
      MinimumReqYears: this.editJob.MinimumReqYears,
      Description: this.editJob.Description,
      IsArcheive: false,
      Skills: this.editJob.Skills,

    }
    this.jobService.updeteJob(body);
  }
}



