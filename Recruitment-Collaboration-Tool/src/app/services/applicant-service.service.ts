import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {Applicant} from '../model/Applicant';
import {ApplicantStatus} from '../model/Applicant-Status';
import {ApplicantHistory} from '../model/Applicant-History';

@Injectable()
export class ApplicantServiceService {

  applicanCollection:AngularFirestoreCollection<Applicant>;
  applicants:Observable<Applicant[]>;
  applicantsStatus:Observable<Applicant[]>;
  applicantsHistory:Observable<Applicant[]>;


  constructor(public applicant:AngularFirestore ) {
    this.applicants= this.applicant.collection('Applicants').valueChanges();
    this.applicantsStatus= this.applicant.collection('ApplicantStatus').valueChanges();
    this.applicantsHistory=this.applicant.collection('ApplicantHistory').valueChanges();
   }

   getApplicants(){
     return this.applicants;
   }

   getApplicantsStatus(){
    return this.applicantsStatus;
   }

   getApplicantsHistory(){
    return this.applicantsHistory;
   }

}
