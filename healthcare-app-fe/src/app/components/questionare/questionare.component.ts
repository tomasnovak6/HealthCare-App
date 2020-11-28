import { Component, OnInit } from '@angular/core';
import { SymptomService } from '../../_services/symptom.service';
import { QuestionareService } from '../../_services/questionare.service';
import { IQuestion } from '../../_interfaces/iquestion';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionare',
  templateUrl: './questionare.component.html',
  styleUrls: ['./questionare.component.scss']
})
export class QuestionareComponent implements OnInit {

  currentQuestion: number = 1;
  selectedQuestion: IQuestion;
  questions: IQuestion[];

  constructor(
    private symptomService: SymptomService,
    private questionareService: QuestionareService,
    private messageService: MessageService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getQuestions();
    this.getQuestionById(this.currentQuestion);
  }

  getQuestions(): void {
    this.questionareService.getQuestions()
      .subscribe(questions => this.questions = questions);
  }

  getQuestionById(id: number): void {
    this.questionareService.getQuestionIdBy(id)
      .subscribe(selectedQuestion => this.selectedQuestion = selectedQuestion);
  }

  isFistQuestion(): boolean {
    let result: boolean = false;

    if (this.questions[0].id === this.currentQuestion) {
      result = true;
    }

    return result;
  }

  isLastQuestion(): boolean {
    let result: boolean = false;
    let count: number = this.questions.length;

    if (this.questions[count - 1].id === this.currentQuestion) {
      result = true;
    }

    return result;
  }

  previousQuestion() {
    if(!this.isFistQuestion()) {
      this.currentQuestion--;
      this.getQuestionById(this.currentQuestion);
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Jste na první otázce.',
        life: 3000
      });
    }
  }

  nextQuestion() {
    if (!this.isLastQuestion()) {
      this.currentQuestion++;
      this.getQuestionById(this.currentQuestion);
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Jste na poslední otázce.',
        life: 3000
      });
      this.router.navigate(['/statistics']);
    }
  }
}
