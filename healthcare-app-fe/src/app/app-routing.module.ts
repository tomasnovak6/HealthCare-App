import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuestionareComponent} from './components/questionare/questionare.component';
import {StatisticsComponent} from './components/overview/statistics/statistics.component';
import {ProfileComponent} from './components/profile/profile.component';
import {OverviewComponent} from './components/overview/overview.component';
import {MedicationComponent} from './components/medication/medication.component';
import {LoginComponent} from './components/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' }, // default component
  { path: 'login', component: LoginComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'questionare', component: QuestionareComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'medication', component: MedicationComponent },
  { path: 'editProfile', component: ProfileComponent },
  { path: 'registration', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
