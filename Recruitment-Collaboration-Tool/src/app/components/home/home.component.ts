import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DataServiceService } from '../../services/data-service.service';
import { Applicant } from '../../model/applicant';
import { AngularFireAuth } from 'angularfire2/auth';
import { ApplicantStatusService } from '../../services/applicant-status.service';
import { ApplicantService } from '../../services/applicant-service.service';
import { debug } from 'util';
import { Window } from 'selenium-webdriver';
import { ApplicantHistory } from '../../model/Applicant-History';
import { ApplicantHistoryService } from '../../services/applicant-history.service';
import { StringIterator } from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ArrLockApplicantId: any[] = [];
  ArrLockApplicant: Applicant[] = [];

  FormInterviewSummary: boolean = true;
  Applicant: Applicant;
  ApplicantHistory: ApplicantHistory;
  subscribtionApplicantStatus:any;
  subscribtionArrLockAplicant:any;
  InterviewSummary:string;
  Date:String;

  constructor(public DataService: DataServiceService,
    private auth: AuthService, private FireAuth: AngularFireAuth,
    private ApplicantStatus: ApplicantStatusService,
    private Applicants: ApplicantService,
    private ApplicantsHistory: ApplicantHistoryService) {
  
  }

  ngOnInit() {
   this.subscribtionApplicantStatus =this.ApplicantStatus.getApplicantStatus().subscribe(res => {
      res.forEach(Status => {
        if (Status.MangerId == this.FireAuth.auth.currentUser.uid) {
          this.ArrLockApplicantId.push(Status.ApplicantId);
        }
      });
    });
    //Get ArrLockAplicant
    this.subscribtionArrLockAplicant= this.Applicants.getApplicants().subscribe(ArrApplicants => {
      ArrApplicants.forEach(Aplicant => {
        this.ArrLockApplicantId.forEach(AplicantId => {
          if (AplicantId == Aplicant.Id) {
            this.ArrLockApplicant.push(Aplicant);
          }
        })
      })
    })
  }
  ngOnDestroy() {
    this.subscribtionApplicantStatus.unsubscribe();
    this.subscribtionArrLockAplicant.unsubscribe();
  }
  goToInterviewSummary(applicant: Applicant) {
    this.Applicant = applicant;
    this.FormInterviewSummary = false;
  }
  AddInterviewSummary() {
    let date = new Date().toISOString().slice(0,10);
    this.ApplicantHistory={ApplicantId:this.Applicant.Id,
      MangerId:this.FireAuth.auth.currentUser.uid,
      ReviewDate : date,ManagerReview:this.InterviewSummary}
    this.ApplicantsHistory.addNewApplicantHistory(this.ApplicantHistory);
    this.FormInterviewSummary = true;
  }
}
