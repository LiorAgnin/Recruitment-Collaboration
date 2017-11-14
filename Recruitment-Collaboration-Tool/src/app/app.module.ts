import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routes';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { NgForm } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { HomeComponent } from './components/home/home.component';
import { AddNewApplicantComponent } from './components/add-new-applicant/add-new-applicant.component';
import { LoginComponent } from './components/login/login.component';
import { AddNewJobComponent } from './components/add-new-job/add-new-job.component';
import { EditJobComponent } from './components/edit-job/edit-job.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Services
import { LoginServiceService } from "./services/login-service.service";
import { JobsServiceService } from "./services/jobs-service.service";
import { ApplicantServiceService } from "./services/applicant-service.service";
import { DataServiceService } from "./services/data-service.service";
import { SkillsetServiceService } from "./services/skillset-service.service";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { UploadFileService } from './services/upload-file.service';
import { AngularFireModule } from 'angularfire2';


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
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'Recruitment-Collaboration'),
    AngularFirestoreModule,
    FormsModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    Ng2CarouselamosModule,

  ],
  providers: [
    LoginServiceService,
    JobsServiceService,
    ApplicantServiceService,
    SkillsetServiceService,
    DataServiceService,
    AngularFireDatabase,
    UploadFileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
