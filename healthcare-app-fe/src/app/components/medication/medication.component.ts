import { Component, OnInit } from '@angular/core';
import { IMedication } from '../../_interfaces/imedication';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.scss']
})
export class MedicationComponent implements OnInit {

  // todo: vyhodit any
  cols: any[];
  medications: any[];

  constructor() { }

  ngOnInit() {

    this.cols = [
      {field: 'name', header: 'Name'},
      {field: 'dosageValue', header: 'Dosage value'},
      {field: 'dasageUnit', header: 'Dosage unit'},
      {field: 'periodicity', header: 'Periodicity'}
    ];

    this.medications = [
      {name: 'Minocyklin', dosageValue: 100, dosageUnit: 'mg', periodicity: '1-0-1'},
      {name: 'APP plus', dosageValue: 500, dosageUnit: 'mg', periodicity: '1-0-1'}
    ];

  }

  getMedications() {

  }

}
