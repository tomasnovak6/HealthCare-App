import { Component, OnInit } from '@angular/core';
import { SymptomService } from '../../services/symptom.service';
import { HealthConditionService } from '../../services/health-condition.service';

@Component({
  selector: 'app-questionare',
  templateUrl: './questionare.component.html',
  styleUrls: ['./questionare.component.scss']
})
export class QuestionareComponent implements OnInit {

  constructor(
    private symptomService: SymptomService,
    private healthConditionService: HealthConditionService
  ) { }

  ngOnInit() {

  }

  getSymptomns() {

  }

  addSymptom() {

  }

}
