import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { StatisticsComponent } from './overview/statistics/statistics.component';
import { QuestionareComponent } from './questionare/questionare.component';
import { QuestionareNewComponent } from './questionare/questionare-new/questionare-new.component';
import { QuestionareListComponent } from './questionare/questionare-list/questionare-list.component';
import { OverviewComponent } from './overview/overview.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
