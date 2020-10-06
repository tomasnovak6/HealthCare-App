import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StatisticsComponent } from './components/overview/statistics/statistics.component';
import { QuestionareComponent } from './components/questionare/questionare.component';
import { QuestionareNewComponent } from './components/questionare/questionare-new/questionare-new.component';
import { QuestionareListComponent } from './components/questionare/questionare-list/questionare-list.component';
import { OverviewComponent } from './components/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    StatisticsComponent,
    QuestionareComponent,
    QuestionareNewComponent,
    QuestionareListComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
