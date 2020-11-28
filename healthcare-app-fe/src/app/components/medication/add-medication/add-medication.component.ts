import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-add-medication',
  templateUrl: './add-medication.component.html',
  styleUrls: ['./add-medication.component.scss']
})
export class AddMedicationComponent implements OnInit {

  addMedicationForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
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
    console.log('submit add medication');

    this.submitted = true;

    // vyresetovat notifikace pri submitu
    this.messageService.clear();
  }

}
