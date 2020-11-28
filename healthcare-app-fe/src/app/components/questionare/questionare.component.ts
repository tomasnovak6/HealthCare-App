import { Component, OnInit } from '@angular/core';
import { QuestionareService } from '../../_services/questionare.service';
import { IQuestion } from '../../_interfaces/iquestion';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

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
    private questionareService: QuestionareService,
    private messageService: MessageService,
    private router: Router,
    private translate: TranslateService
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
        summary: this.translate.instant('alertMessage.firstQuestion'),
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
        summary: this.translate.instant('alertMessage.lastQuestion'),
        life: 3000
      });
      this.router.navigate(['/statistics']);
    }
  }

  getProgresbarValue(): number {
    let result: number;
    let count: number = this.questions.length;

    result = Math.round(((this.currentQuestion / count) * 100));

    return result;
  }
}
