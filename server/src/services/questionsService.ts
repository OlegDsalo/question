import {IQuestion, Question} from "../db/QuestionSchema";
import {QuestionDto} from "../dto/QuestionDto";

const DEFAULT_QUESTIONS = [{
  questions: 'What?',
  answer: ''
},{
  questions: 'Who?',
  answer: ''
},{
  questions: 'Where',
  answer: ''
}];

interface Question{
  questions:string,
  answer:string,
}
// TODO: use any storage to save the questions
export class QuestionsService {

  static async getQuestions():Promise<any> {
    const response = await Question.find().exec()
    return response.map((question: any) => new QuestionDto(question._id, question.question, question.answer));
  }

  static addQuestion(question: IQuestion) {
    const newQuestion = new Question(question);
    return newQuestion.save();
  }

  static updateQuestion(id: string, updatedQuestion: Partial<IQuestion>) {
    return Question.findById(id).exec().then((question) => {
      if (!question) {
        throw new Error('Question not found');
      }

      if (question.isBeingEdited) {
        throw new Error('Question is being edited by another client');
      }

      question.isBeingEdited = true;
      return question.save().then(() => {
        Object.assign(question, updatedQuestion, { isBeingEdited: false });
        return question.save();
      });
    });
  }

  static deleteQuestion(id: string) {
    return Question.findByIdAndDelete(id).exec();
  }
}
