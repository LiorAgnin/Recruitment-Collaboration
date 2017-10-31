import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { NgForm, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//Components
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { HomeComponent } from './components/home/home.component';
import { AddNewApplicantComponent } from './components/add-new-applicant/add-new-applicant.component';
import { LoginComponent } from './components/login/login.component';
import { AddNewJobComponent } from './components/add-new-job/add-new-job.component';
import { EditJobComponent } from './components/edit-job/edit-job.component';
//Services
import { LoginServiceService } from "./services/login-service.service";
import { JobsServiceService } from "./services/jobs-service.service";
import { ApplicantServiceService } from "./services/applicant-service.service";
import { DataServiceService } from "./services/data-service.service";
import { SkillsetServiceService } from "./services/skillset-service.service";



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    JobsComponent,
    ApplicantComponent,
    HomeComponent,
    AddNewApplicantComponent,
    LoginComponent,
    AddNewJobComponent,
    EditJobComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'Recruitment-Collaboration'),
    AngularFirestoreModule,
     FormsModule, NgbModule.forRoot()

  ],
  providers: [
    LoginServiceService,
    JobsServiceService,
    ApplicantServiceService,
    SkillsetServiceService,
    DataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
