import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Job } from '../model/job';

@Injectable()
export class JobsServiceService {

  jobCollection: AngularFirestoreCollection<Job>;
  jobs: Observable<Job[]>;

  constructor(public job: AngularFirestore) {
    this.jobs = this.job.collection('Jobs').snapshotChanges().map(chages => {
      return chages.map(job => {
        const jobData = job.payload.doc.data() as Job;
        jobData.Id = job.payload.doc.id as any;
        return jobData;

      })
    });
  }


  getJobs() {
    return this.jobs;
  }

  addNewJob(){
    
  }

}
