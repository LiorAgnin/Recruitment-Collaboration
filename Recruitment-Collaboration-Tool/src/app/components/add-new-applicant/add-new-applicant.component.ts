import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApplicantServiceService } from "../../services/applicant-service.service";
import { Applicant } from "../../model/Applicant";
import { JobsServiceService } from "../../services/jobs-service.service";
import { SkillsetServiceService } from "../../services/skillset-service.service";
import { Skillset } from '../../model/skillset';
import { UploadFileService } from '../../services/upload-file.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Upload } from '../../model/upload';
import * as _ from "lodash";
import * as firebase from 'firebase';
@Component({
  selector: 'add-new-applicant',
  templateUrl: './add-new-applicant.component.html',
  styleUrls: ['./add-new-applicant.component.css']
})
export class AddNewApplicantComponent implements OnInit {
  newApplicant: Applicant = <Applicant>{};
  arSkillSetPicked: string[] = [];
  arSkillset: any;
  newArSkillSet: Skillset[] = [];
  selectedFiles: FileList;
  currentUpload: Upload;
  constructor(
    public ApplicantServiceService: ApplicantServiceService,
    public jobService: JobsServiceService,
    public SkillsetService: SkillsetServiceService,
    private upSvc: UploadFileService, private router: Router,
    private route: ActivatedRoute) { }
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
  addApplicant(formAddApplicant) {
    console.log(formAddApplicant)
    const newApplicant = {
      FirstName: this.newApplicant.FirstName,
      LastName: this.newApplicant.LastName,
      Experience: this.newApplicant.Experience,
      City: this.newApplicant.City,
      Email: this.newApplicant.Email,
      PhoneNumber: this.newApplicant.PhoneNumber,
      Age: this.newApplicant.Age,
      Gender:this.newApplicant.Gender,
      // CV:,
      Position: this.newApplicant.Position,
      Skills: this.arSkillSetPicked,
    }
    this.uploadSingle();
    this.ApplicantServiceService.addNewApplicant(newApplicant);
  }
  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }
  uploadSingle() {
    let file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.currentUpload.name = this.newApplicant.FirstName.toLocaleLowerCase() + ' ' + this.newApplicant.LastName.toLocaleLowerCase() + " CV".toLocaleLowerCase();
    this.upSvc.pushUpload(this.currentUpload);
  }
  // uploadMulti() {
  //   let files = this.selectedFiles
  //   if (_.isEmpty(files)) return;

  //   let filesIndex = _.range(files.length)
  //   _.each(filesIndex, (idx) => {
  //     this.currentUpload = new Upload(files[idx]);
  //     this.upSvc.pushUpload(this.currentUpload)
  //   }
  //   )
  // }
}
