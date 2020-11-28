import { IQuestionAnswers } from './IQuestionAnswers';

export class IQuestion {
  id: number;
  name: string;
  backgroundImage: string;
  answers: IQuestionAnswers[];
}
