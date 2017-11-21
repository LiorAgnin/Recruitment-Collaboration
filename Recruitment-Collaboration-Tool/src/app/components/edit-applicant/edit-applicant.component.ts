import { Component, OnInit } from '@angular/core';
import { ApplicantService } from "../../services/applicant-service.service";
import { DataServiceService } from "../../services/data-service.service";
import { Applicant } from "../../model/Applicant";
import { UploadFileService } from '../../services/upload-file.service';
import { Upload } from '../../model/upload';
import { JobsServiceService } from "../../services/jobs-service.service";
import { SkillsetServiceService } from "../../services/skillset-service.service";
import { Skillset } from '../../model/skillset';

@Component({
  selector: 'app-edit-applicant',
  templateUrl: './edit-applicant.component.html',
  styleUrls: ['./edit-applicant.component.css']
})
export class EditApplicantComponent implements OnInit {

  editApplicant: Applicant;
  editSkils: Skillset;
  selectedFiles: FileList;
  currentUpload: Upload;
  arSkillset: any;
  newArSkillSet: any;
  arSkillSetPicked: string[] = [];

  constructor(public dataServiceService: DataServiceService,
    public applicantService: ApplicantService,
    private upSvc: UploadFileService,
    public jobService: JobsServiceService,
    public SkillsetService: SkillsetServiceService, ) {
    this.editApplicant = dataServiceService.applicantToEdit;
  }

  ngOnInit() {
    this.SkillsetService.getSkillsets().subscribe(skills => {
      this.arSkillset = skills[0];
      this.arSkillset.skillset.forEach(element => {
        const skil = { name: element, selected: false };
        this.newArSkillSet.push(skil);
      });
    });
  }

  editApplicantHandler(formEditApplicant) {
    console.log(formEditApplicant)
    const editedApplicant = {
      FirstName: this.editApplicant.FirstName,
      LastName: this.editApplicant.LastName,
      Experience: this.editApplicant.Experience,
      City: this.editApplicant.City,
      Email: this.editApplicant.Email,
      PhoneNumber: this.editApplicant.Phone,
      Age: this.editApplicant.Age,
      Gender: this.editApplicant.Gender,
      // CV:,
      Position: this.editApplicant.Position,
      Skills: this.arSkillSetPicked,
    }
   // this.uploadSingle();
    this.applicantService.updeteApplicants(editedApplicant);
    console.log(editedApplicant);
  }

  changeSkillSet(skill) {
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

  uploadSingle() {
    let file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.currentUpload.name = this.editApplicant.FirstName.toLocaleLowerCase() +
      ' ' + this.editApplicant.LastName.toLocaleLowerCase() + " CV".toLocaleLowerCase();
    this.upSvc.pushUpload(this.currentUpload);
  }
}
