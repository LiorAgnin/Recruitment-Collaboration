import { Component, OnInit } from '@angular/core';
import { JobsServiceService } from "../../services/jobs-service.service";
import { Job } from "../../model/job";
import { SkillsetServiceService } from "../../services/skillset-service.service";
import { Skillset } from '../../model/skillset';

@Component({
  selector: 'app-add-new-job',
  templateUrl: './add-new-job.component.html',
  styleUrls: ['./add-new-job.component.css']
})
export class AddNewJobComponent implements OnInit {
  newJob: Job = <Job>{};
  arSkillSetPicked: string[] = [];
  arSkillset: any;
  newArSkillSet: Skillset[] = [];
 
  constructor(public jobService: JobsServiceService,
    public SkillsetService: SkillsetServiceService) { }
  ngOnInit() {
   
    this.SkillsetService.getSkillsets().subscribe(skills => {
      this.arSkillset = skills[0];
      this.arSkillset.skillset.forEach(element => {
        const skil = { name: element, selected: false };
        this.newArSkillSet.push(skil);
      });
    });
  }

  skillSetArray(skill) {
    if (skill.selected) {
      this.arSkillSetPicked.push(skill.name)
    }
    if (!skill.selected) {
      console.log(skill)
      let aa = this.arSkillSetPicked.indexOf(skill.name);
      this.arSkillSetPicked.splice(aa, 1)
    }
    console.log(this.arSkillSetPicked)
  }

  addNewJobSubmitHandler() {
    const body = {
      Postion: this.newJob.Postion,
      MinimumReqYears: this.newJob.MinimumReqYears,
      Description: this.newJob.Description,
      IsArcheive: false,      
      Skills: this.arSkillSetPicked,
    }
    this.jobService.addNewJob(body);
  }
}
