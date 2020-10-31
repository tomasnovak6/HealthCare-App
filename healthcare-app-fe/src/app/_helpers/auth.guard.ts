/**
 * Toto je trida, ktera kontroluje, jestli je uzivatel, ktery chce vstoupit do klientske zony prihlasen.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      // pokud je uzivatel autorizovan, vrat true
      return true;
    }

    // pokud neni prihlasen zadny uzivatel, tak presmerovat na login
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
