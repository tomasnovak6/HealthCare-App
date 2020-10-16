import { Injectable } from '@angular/core';

import { IHealthCondition } from '../_interfaces/ihealth-condition';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthConditionService {

  constructor(
    private httpClient: HttpClient
  ) {

  }

  getHealthCondition(): Observable<IHealthCondition> {
    return null;
  }

  getHealthConditions(): Observable<IHealthCondition[]> {
    return null;
  }

  newHealthCondition(): Observable<IHealthCondition> {
    return null;
  }

}
