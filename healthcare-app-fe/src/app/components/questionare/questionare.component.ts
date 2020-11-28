import { Component, OnInit } from '@angular/core';
import { SymptomService } from '../../_services/symptom.service';
import { HealthConditionService } from '../../_services/health-condition.service';

@Component({
  selector: 'app-questionare',
  templateUrl: './questionare.component.html',
  styleUrls: ['./questionare.component.scss']
})
export class QuestionareComponent implements OnInit {

  currentQuestion: number = 1;

  constructor(
    private symptomService: SymptomService,
    private healthConditionService: HealthConditionService
  ) { }

  ngOnInit() {

  }

  getSymptomns() {

  }

  previousQuestion() {
    console.log('previousQuestion');
  }


  nextQuestion() {
    console.log('nextQuestion');
  }
}
