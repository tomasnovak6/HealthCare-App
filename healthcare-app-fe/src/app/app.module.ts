import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { QuestionareComponent } from './questionare/questionare.component';
import { GuestionareListComponent } from './questionare/guestionare-list/guestionare-list.component';
import { GuestionareNewComponent } from './questionare/guestionare-new/guestionare-new.component';
import { QuestionareNewComponent } from './questionare/questionare-new/questionare-new.component';
import { QuestionareListComponent } from './questionare/questionare-list/questionare-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    StatisticsComponent,
    QuestionareComponent,
    GuestionareListComponent,
    GuestionareNewComponent,
    QuestionareNewComponent,
    QuestionareListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
