import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IQuestion } from '../_interfaces/iquestion';
import { QUESTIONS } from '../_mocks/mock-questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionareService {

  constructor() { }

  getQuestions(): Observable<IQuestion[]> {
    return of( QUESTIONS );
  }

  getQuestionIdBy(id: number): Observable<IQuestion> {
    return of (QUESTIONS.find(obj => obj.id == id));
  }

}
