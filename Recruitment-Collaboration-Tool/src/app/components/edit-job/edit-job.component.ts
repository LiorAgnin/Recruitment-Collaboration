import { Component, OnInit } from '@angular/core';
import { JobsServiceService } from "../../services/jobs-service.service";
import { Job } from "../../model/job";
import { DataServiceService } from "../../services/data-service.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from '../../services/auth.service';
import { Skillset } from '../../model/skillset';
import { SkillsetServiceService } from '../../services/skillset-service.service';


@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {

  show = false;
  editJob: any;
  arSkillset: any;
  newArSkillSet: Skillset[] = [];
  arSkillSetPicked: string[] = [];
  skil;
  toggleAfterUpdate: boolean = true;
  jobEditedMessage: string;

  constructor(public jobService: JobsServiceService,
    public DataService: DataServiceService,
    public SkillsetService: SkillsetServiceService,
    private router: Router,
    public authService: AuthService) {
    this.editJob = DataService.jobToEdit;
  }
  ngOnInit() {
    let skillsSelected;
    this.SkillsetService.getSkillsets().subscribe(skills => {
      this.arSkillset = skills[0];
      this.arSkillset.skillset.forEach(element => {
        skillsSelected = false;
        for (var index = 0; index < this.editJob.Skills.length; index++) {
          if (element == this.editJob.Skills[index]) {
            skillsSelected = true;
            this.arSkillSetPicked.push(this.editJob.Skills[index])
            break;
          }
        }
        this.skil = { name: element, selected: skillsSelected }
        this.newArSkillSet.push(this.skil);
      });
    });
  }

  skillSetArray(skill) {
    if (skill.selected) {
      let index = this.newArSkillSet.indexOf(skill);
      this.newArSkillSet[index].selected = false;
      let spliceIndex = this.arSkillSetPicked.indexOf(skill.name);
      this.arSkillSetPicked.splice(spliceIndex, 1);
    }
    else {
      this.arSkillSetPicked.push(skill.name);
      let index = this.newArSkillSet.indexOf(skill);
      this.newArSkillSet[index].selected = true;
    }
  }
  spinNow: boolean = false;
  onSubmitEditForm() {
    this.editJob.Skills = this.arSkillSetPicked;
    const editedJob = {
      Id: this.editJob.Id,
      Postion: this.editJob.Postion,
      MinimumReqYears: this.editJob.MinimumReqYears,
      Description: this.editJob.Description,
      IsArcheive: this.editJob.IsArcheive,
      Skills: this.editJob.Skills
    }
    if (this.authService.isUserAdmin()) {
      this.jobService.updeteJob(editedJob);
      this.toggleAfterUpdate = false;
      this.jobEditedMessage = "Job edited sucssefuly!";
    }
  }
}
