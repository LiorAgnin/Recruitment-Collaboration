import { Routes } from '@angular/router';
import { JobsComponent } from './components/jobs/jobs.component';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { HomeComponent } from './components/home/home.component';
import { AddNewApplicantComponent } from './components/add-new-applicant/add-new-applicant.component';
import { LoginComponent } from './components/login/login.component';
import { AddNewJobComponent } from './components/add-new-job/add-new-job.component';
import { ApplicantDetailComponent } from './components/applicant-detail/applicant-detail.component';
import { JobDetailComponent } from "./components/job-detail/job-detail.component";
import { EditJobComponent } from './components/edit-job/edit-job.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent},
    { path: 'jobs', component: JobsComponent, canActivate: [AuthGuard]  },
    { path: 'applicant-detail', component: ApplicantDetailComponent, canActivate: [AuthGuard]  },
    { path: 'applicant', component: ApplicantComponent, canActivate: [AuthGuard]  },
    // { path: 'add-applicant', component: AddNewApplicantComponent, canActivate: [AuthGuard]  },
    { path: 'login', component: LoginComponent },
    { path: 'edit-job', component: EditJobComponent, canActivate: [AuthGuard]  },
    { path: 'job-detail', component: JobDetailComponent, canActivate: [AuthGuard]  },
    { path: 'add-job', component: AddNewJobComponent, canActivate: [AuthGuard]  },
    // { path: 'edit-job', component: EditJobComponent, canActivate: [AuthGuard]  },
    { path: '**', redirectTo: '/404' }
];