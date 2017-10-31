import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {Applicant} from '../model/Applicant';
import {ApplicantStatus} from '../model/Applicant-Status';
import {ApplicantHistory} from '../model/Applicant-History';

@Injectable()
export class ApplicantServiceService {

  applicantDocm:AngularFirestoreDocument<Applicant>;
  applicanCollection:AngularFirestoreCollection<Applicant>;
  applicants:Observable<Applicant[]>;
  // applicantsStatus:Observable<Applicant[]>;
  // applicantsHistory:Observable<Applicant[]>;


  constructor(public applicant:AngularFirestore ) {

    this.applicanCollection=this.applicant.collection('Applicants');

    this.applicants= this.applicanCollection.snapshotChanges().map(chages=>{
      return chages.map(applicant=>{
        const applicantData=applicant.payload.doc.data() as Applicant;
        applicantData.Id = applicant.payload.doc.id as any;
        return applicantData;
      })
    });


    // this.applicantsStatus= this.applicant.collection('ApplicantStatus').valueChanges();
    // this.applicantsHistory=this.applicant.collection('ApplicantHistory').valueChanges();
   }

   getApplicants(){
     return this.applicants;
   }

   addNewApplicant(newApplicant:Applicant){
     this.applicanCollection.add(newApplicant);
   }

   updeteJob(updeteJob: Applicant) {
    this.applicantDocm = this.applicant.doc(`Jobs/${updeteJob.Id}`);
    this.applicantDocm.update(updeteJob);
  }

  //  getApplicantsStatus(){
  //   return this.applicantsStatus;
  //  }

  //  getApplicantsHistory(){
  //   return this.applicantsHistory;
  //  }

}
