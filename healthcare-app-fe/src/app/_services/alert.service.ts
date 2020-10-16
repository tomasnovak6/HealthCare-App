import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private subject = new Subject<any>();
  private keepAfterRouteChange: boolean = false;

  constructor(private router: Router) {
    // vymaz zpravy pri zmene routy
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          // udrz zprvy pouze pro jednu zmenu routy
          this.keepAfterRouteChange = false;
        } else {
          // vymazat zpravy
          this.clear();
        }
      }
    });
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  success(message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({ type: 'success', text: message });
  }

  error(message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({ type: 'error', text: message });
  }

  clear() {
    // vymaz pomoci volani subject.next() bez parametru
    this.subject.next();
  }

}
