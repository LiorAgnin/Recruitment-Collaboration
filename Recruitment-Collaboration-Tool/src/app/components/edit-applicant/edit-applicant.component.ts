import { Component, OnInit } from '@angular/core';
import { ApplicantService } from "../../services/applicant-service.service";
import { DataServiceService } from "../../services/data-service.service";
import { Applicant } from "../../model/Applicant";
import { UploadFileService } from '../../services/upload-file.service';
import { Upload } from '../../model/upload';
import { JobsServiceService } from "../../services/jobs-service.service";
import { Skillset } from '../../model/skillset';
import { FirebaseApp } from 'angularfire2';
import { BrowserModule, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-applicant',
  templateUrl: './edit-applicant.component.html',
  styleUrls: ['./edit-applicant.component.css']
})
export class EditApplicantComponent implements OnInit {
  pageurl: SafeResourceUrl;
  editApplicant: Applicant;
  editSkils: Skillset;
  selectedFiles: FileList;
  currentUpload: Upload;
  arSkillset: any = [];
  newArSkillSet: any = [];
  arSkillSetPicked: string[] = [];
  getCvOf: any;
  viewWordFile: any;
  applicantCvIdIsdelete: boolean=false;
  constructor(public dataService: DataServiceService,
    public applicantService: ApplicantService,
    public upSvc: UploadFileService,
    private firebaseApp: FirebaseApp,
    public jobService: JobsServiceService,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.editApplicant = this.dataService.applicantToEdit;

    this.arSkillset = this.dataService.arSkillset;
    this.arSkillset.forEach(element => {
      const skil = { name: element, selected: false };
      this.newArSkillSet.push(skil);
    });
    console.log(this.editApplicant)

    this.getCvOf = this.editApplicant.CvId;
    const storageRef = this.firebaseApp.storage().ref().child('/uploads/' + this.getCvOf);
    storageRef.getDownloadURL().then(url => { this.viewWordFile = url });
    this.pageurl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.viewWordFile);
    
  }
  downloadCV() {
    var url = this.viewWordFile;
    open(url);
  }
  editApplicantHandler(formEditApplicant) {
    console.log(formEditApplicant)
    const editedApplicant = {
      Id:this.editApplicant.Id,
      FirstName: this.editApplicant.FirstName,
      LastName: this.editApplicant.LastName,
      Experience: this.editApplicant.Experience,
      City: this.editApplicant.City,
      Email: this.editApplicant.Email,
      PhoneNumber: this.editApplicant.Phone,
      Age: this.editApplicant.Age,
      Gender: this.editApplicant.Gender,
      CV:this.editApplicant.CvId,
      Position: this.editApplicant.Position,
      Skills: this.arSkillSetPicked,
    }
    this.uploadSingle();
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


    detectFiles(event) {
    this.selectedFiles = event.target.files;
    if(this.selectedFiles!=undefined)
    {
      this.upSvc.deleteFileStorage(this.editApplicant.CvId.toString())
    }
  }

  uploadSingle() {
   let file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.currentUpload.name = this.editApplicant.CvId.toString();
    this.upSvc.pushUpload(this.currentUpload);
  }
}
