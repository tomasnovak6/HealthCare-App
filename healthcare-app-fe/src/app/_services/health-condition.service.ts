import { Injectable } from '@angular/core';
import { IHealthCondition } from '../_interfaces/ihealth-condition';
import { Observable, of } from 'rxjs';
import { HEALTH_CONDITIONS_BY_TYPE, HEALTH_CONDITIONS_SUMMARY } from '../_mocks/mock-health-condition';

@Injectable({
  providedIn: 'root'
})
export class HealthConditionService {

  constructor() {}

  getHealthCondition(): Observable<IHealthCondition> {
    return null;
  }

  getHealthConditionsSummary(): Observable<IHealthCondition[]> {
    return of(HEALTH_CONDITIONS_SUMMARY);
  }

  getHealthConditionsByType(): Observable<any[]> {
    return of(HEALTH_CONDITIONS_BY_TYPE);
  }

}
