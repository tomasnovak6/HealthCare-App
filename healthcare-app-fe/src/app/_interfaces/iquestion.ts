import { IQuestionAnswers } from "./iquestion-answers";

export class IQuestion {
  id: number;
  name: string;
  backgroundImage: string;
  answers: IQuestionAnswers[];

}
