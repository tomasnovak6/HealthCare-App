import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionareComponent } from './components/questionare/questionare.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OverviewComponent } from './components/overview/overview.component';
import { MedicationComponent } from './components/medication/medication.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './_helpers';


const routes: Routes = [
  { path: '', component: OverviewComponent, canActivate: [AuthGuard] }, // default component
  { path: 'login', component: LoginComponent },
  // { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard] },
  { path: 'questionare', component: QuestionareComponent, canActivate: [AuthGuard] },
  { path: 'statistics', component: StatisticsComponent, canActivate: [AuthGuard] },
  { path: 'medication', component: MedicationComponent, canActivate: [AuthGuard] },
  { path: 'editProfile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'registration', component: ProfileComponent, data: {formType: 'registration'} }

  // jinak presmeruj na homepage
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
