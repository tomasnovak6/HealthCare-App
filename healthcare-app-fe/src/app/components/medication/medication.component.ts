import { Component, OnInit } from '@angular/core';
import { IMedication } from '../../_interfaces/imedication';
import { MedicationService } from '../../_services/medication.service';
import { ITableCol } from '../../_interfaces/itablecol';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.scss']
})
export class MedicationComponent implements OnInit {

  tableCols: ITableCol[];
  medications: IMedication[];
  showAddMedication = false;

  constructor(
    private medicationService: MedicationService
  ) { }

  ngOnInit() {
    this.getTableCols();
    this.getMedications();
  }

  addMedicationClick(): void {
    this.showAddMedication = !this.showAddMedication;
  }

  closeAddMedication(event: any) {
    this.showAddMedication = false;
  }

  getTableCols(): void {
    this.medicationService.getTableCols()
      .subscribe(tableCols => this.tableCols = tableCols);
  }

  getMedications(): void {
    this.medicationService.getMedications()
      .subscribe(medications => this.medications = medications);
  }

}
