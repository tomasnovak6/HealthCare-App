import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'healthcare-app-fe';

  constructor(public translate: TranslateService) {
    translate.addLangs(['cs', 'en']);
    translate.setDefaultLang('cs');

    const lang = navigator.language;

    if (lang === 'en-GB' || lang === 'en-US') {
      translate.use('en');
    } else if (lang === 'cs') {
      translate.use('cs');
    }
  }
}
