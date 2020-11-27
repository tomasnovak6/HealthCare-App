import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services/authentication.service';
import { IUser } from './_interfaces/iuser';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'healthcare-app-fe';

  currentUser: IUser;

  constructor(
    public translate: TranslateService,
    private router: Router,

    private messageService: MessageService

    // private authenticationService: AuthenticationService
  ) {
    // translate init
    translate.addLangs(['cs', 'en']);
    translate.setDefaultLang('cs');

    const lang = navigator.language;

    if (lang === 'en-GB' || lang === 'en-US') {
      translate.use('en');
    } else if (lang === 'cs') {
      translate.use('cs');
    }

    // fake backend init
    // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

}
