import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { HomeComponent } from './components/home/home.component';
import { AddNewApplicantComponent } from './components/add-new-applicant/add-new-applicant.component';
import { LoginComponent } from './components/login/login.component';
import { AddNewJobComponent } from './components/add-new-job/add-new-job.component';
import { EditJobComponent } from './components/edit-job/edit-job.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'jobs', component: JobsComponent },
    { path: 'applicant', component: ApplicantComponent },
    { path: 'app-applicant', component: AddNewApplicantComponent },
    { path: 'login', component: LoginComponent },
    { path: 'add-job', component: AddNewJobComponent },
    { path: 'edit-job', component: EditJobComponent },
    { path: '**', redirectTo: '/404' }
];