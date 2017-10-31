import { Component, OnInit } from '@angular/core';
import { Applicant } from '../../model/Applicant';
@Component({
  selector: 'add-new-applicant',
  templateUrl: './add-new-applicant.component.html',
  styleUrls: ['./add-new-applicant.component.css']
})
export class AddNewApplicantComponent implements OnInit {
  newApplicant: Applicant = <Applicant>{};
  arSkillSetPicked: any[] = [];
  skillSet = {
    skills: [
      { name: 'JavaScript', selected: true },
      { name: 'CSS', selected: false },
    ]
  }
  constructor() {
  }

  ngOnInit() {
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
}
