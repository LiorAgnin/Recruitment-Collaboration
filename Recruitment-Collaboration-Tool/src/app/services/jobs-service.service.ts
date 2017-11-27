import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Job } from '../model/job';

@Injectable()
export class JobsServiceService {

  jobCollection: AngularFirestoreCollection<Job>;
  jobs: Observable<Job[]>;
  jobDocum: AngularFirestoreDocument<Job>;
  constructor(public fs: AngularFirestore ) {
    this.jobCollection = this.fs.collection('Jobs');
   
    this.jobs = this.jobCollection.snapshotChanges().map(chages => {
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

  addNewJob(newJob: Job) {
    this.jobCollection.add(newJob);
  }

  updeteJob(jobEdit: Job) {
    this.jobDocum = this.fs.doc(`Jobs/${jobEdit.Id}`);
    this.jobDocum.update(jobEdit);
  }
 
}
