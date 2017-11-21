import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Applicant } from '../model/Applicant';
import { ApplicantStatus } from '../model/Applicant-Status';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class ApplicantStatusService {
  applicantDocm: AngularFirestoreDocument<ApplicantStatus>;
  applicantStatusCollection: AngularFirestoreCollection<ApplicantStatus>;
  applicantsStatus: Observable<ApplicantStatus[]>;
  status: Observable<ApplicantStatus[]>;
  statusCol: AngularFirestoreCollection<ApplicantStatus>;
  constructor(private fs: AngularFirestore, private auth: AngularFireAuth) {
    this.applicantStatusCollection = this.fs.collection('ApplicantStatus');
    this.applicantsStatus = this.applicantStatusCollection.snapshotChanges().map(chages => {
      return chages.map(applicantStatus => {
        const applicantData = applicantStatus.payload.doc.data() as ApplicantStatus;
        applicantData.Id = applicantStatus.payload.doc.id;
        return applicantData;
      });
    });
  }
  lockApplicant(applicantStatusAdd: ApplicantStatus) {
    this.applicantStatusCollection.add(applicantStatusAdd);
  }

  updeteApplicantsStatus(applicantStatusUpdate: ApplicantStatus) {
    this.applicantDocm = this.fs.doc(`ApplicantStatus/${applicantStatusUpdate.Id}`);
    this.applicantDocm.update(applicantStatusUpdate);
  }
  getApplicantStatus() {
    return this.applicantsStatus;
  }
  deleteApplicantsStatus(ApplicantIdToDelete: any) {
    this.applicantDocm = this.fs.doc(`ApplicantStatus/${ApplicantIdToDelete}`);
    this.applicantDocm.delete();
  }
  public IsApplicantLockedByManager(applicant) {
    // let currentManagerId = this.auth.auth.currentUser.uid;
    // this.statusCol = this.fs.collection('ApplicantStatus', res =>
    //   res.where('ApplicantId', '==', applicant.Id)
    //     .where('MangerId', '==', currentManagerId));
    // return this.status = this.statusCol.snapshotChanges()
    //   .map(actions => {
    //     return actions.map(applicant => {
    //       const applicantData = applicant.payload.doc.data() as ApplicantStatus;
    //       applicantData.Id = applicant.payload.doc.id as any;
    //       return applicantData;
    //     });
    //   });
  }
}