import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptor, fakeBackendProvider, JwtInterceptor } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StatisticsComponent } from './components/overview/statistics/statistics.component';
import { QuestionareComponent } from './components/questionare/questionare.component';
import { QuestionareNewComponent } from './components/questionare/questionare-new/questionare-new.component';
import { QuestionareListComponent } from './components/questionare/questionare-list/questionare-list.component';
import { OverviewComponent } from './components/overview/overview.component';
import { MedicationComponent } from './components/medication/medication.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    StatisticsComponent,
    QuestionareComponent,
    QuestionareNewComponent,
    QuestionareListComponent,
    OverviewComponent,
    MedicationComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider pouzity pro vytvoreni fake Back-endu
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
