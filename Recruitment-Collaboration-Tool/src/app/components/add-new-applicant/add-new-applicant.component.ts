import { Component, OnInit } from '@angular/core';
import { ApplicantServiceService } from "../../services/applicant-service.service";
import { Applicant } from "../../model/Applicant";

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

  constructor(public ApplicantServiceService:ApplicantServiceService) { }

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
//   detectFiles(event) {
//     this.selectedFiles = event.target.files;
// }
//   uploadSingle() {
//     let file = this.selectedFiles.item(0)
//     this.currentUpload = new Upload(file);
//     this.upSvc.pushUpload(this.currentUpload)
//   }

//   uploadMulti() {
//     let files = this.selectedFiles
//     if (_.isEmpty(files)) return;

//     let filesIndex = _.range(files.length)
//     _.each(filesIndex, (idx) => {
//       this.currentUpload = new Upload(files[idx]);
//       this.upSvc.pushUpload(this.currentUpload)}
//     )
//   }
}
