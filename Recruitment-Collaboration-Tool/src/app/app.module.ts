import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
=======
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormsModule } from '@angular/forms';
>>>>>>> c3de82fa3520f7ef5c7c70b95baf45c5ad4c665e

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
<<<<<<< HEAD

//Services
import { LoginServiceService } from "./services/login-service.service";
import { JobsServiceService } from "./services/jobs-service.service";
import { ApplicantServiceService } from "./services/applicant-service.service";
import { DataServiceService } from "./services/data-service.service";
import { SkillsetServiceService } from "./services/skillset-service.service";



=======
>>>>>>> c3de82fa3520f7ef5c7c70b95baf45c5ad4c665e
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
<<<<<<< HEAD
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'Recruitment-Collaboration'),
    AngularFirestoreModule
  ],
  providers: [
    LoginServiceService,
    JobsServiceService,
    ApplicantServiceService,
    SkillsetServiceService,
    DataServiceService
=======
    BrowserModule, FormsModule, NgbModule.forRoot()
>>>>>>> c3de82fa3520f7ef5c7c70b95baf45c5ad4c665e
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
