import { Injectable } from '@angular/core';

import { ISymptom } from '../_interfaces/isymptom';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SymptomService {

  constructor(
    private httpClient: HttpClient
  ) {

  }

  getSymptom(): Observable<ISymptom> {
    return null;
  }

  getSymptoms(): Observable<ISymptom[]> {
    return null;
  }

}
