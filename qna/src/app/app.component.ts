import {Component, OnInit} from '@angular/core';
import {QuestionService} from './service/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  questions: any[] = [];
  newQuestion: any = { question: '', answer: '' };
  selectedQuestion: any;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getQuestions().subscribe(questions => this.questions = questions);
  }

  createQuestion(): void {
    this.questionService.addQuestion(this.newQuestion).subscribe(question => {
      this.questions.push(question);
      this.newQuestion = { question: '', answer: '' };
    });
  }

  updateQuestion(): void {
    if (this.selectedQuestion && this.selectedQuestion.id) {
      this.questionService.updateQuestion(this.selectedQuestion.id, this.selectedQuestion).subscribe(() => {
        this.getQuestions();
        this.selectedQuestion = null;
      });
    }
  }

  deleteQuestion(id: string): void {
    this.questionService.deleteQuestion(id).subscribe(() => {
      this.questions = this.questions.filter(question => question.id !== id);
    });
  }

  selectQuestion(question: any): void {
    this.selectedQuestion = { ...question };
  }

  onSubmit(): void {
    if (this.selectedQuestion && this.selectedQuestion.id) {
      this.updateQuestion();
    } else {
      console.log(this.newQuestion);
      this.createQuestion();
    }
  }

  toggleAnswerVisibility(question: any): void {
    question.showAnswer = !question.showAnswer;
  }

  clearInputs(): void {
    this.selectedQuestion = null;
  }
}
