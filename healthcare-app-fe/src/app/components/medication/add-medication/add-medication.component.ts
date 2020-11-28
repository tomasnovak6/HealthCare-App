import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { MedicationService } from '../../../_services/medication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-medication',
  templateUrl: './add-medication.component.html',
  styleUrls: ['./add-medication.component.scss']
})
export class AddMedicationComponent implements OnInit {

  addMedicationForm: FormGroup;
  submitted = false;
  @Output() hidden = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private medicationService: MedicationService
  ) { }

  ngOnInit() {
    this.addMedicationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      dosageValue: ['', [Validators.required, Validators.minLength(1)]],
      dosageUnit: [''],
      timePeriodFrom: [''],
      timePeriodTo: [''],
      periodicity: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  get f() { return this.addMedicationForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    // vyresetovat notifikace pri submitu
    this.messageService.clear();

    // nepokracovat, pokud neni formular validni
    if (this.addMedicationForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Odeslání formuláře nebylo úspěšné!',
        life: 3000
      });

      return;
    }

    this.medicationService.insertMedication(this.addMedicationForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.messageService.add({
            severity: 'success',
            summary: 'Medikace byla úspěšně uložena',
            life: 3000
          })

          this.hidden.emit(true);

        },
        error => {
          this.messageService.add({
            severity: 'error',
            summary: 'Při ukládání medikace nastala chyba',
            life: 3000
          });
        });
  }

}
