import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { MEDICATION_TABLECOLS, MEDICATIONS } from '../_mocks/mock-medications';
import { IMedication } from '../_interfaces/imedication';
import { ITableCol } from '../_interfaces/itablecol';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  constructor() {}

  getTableCols(): Observable<ITableCol[]> {
    return of( MEDICATION_TABLECOLS );
  }

  getMedications(): Observable<IMedication[]> {
    return of( MEDICATIONS );
  }

  insertMedication(medication: any): Observable<IMedication> {
    return null;
  }

}
