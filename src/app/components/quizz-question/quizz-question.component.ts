import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActionsService } from 'src/app/services/actions.service';
import { RandomizeTriviaService } from 'src/app/services/randomize-trivia.service';

@Component({
  selector: 'app-quizz-question',
  templateUrl: './quizz-question.component.html',
  styleUrls: ['./quizz-question.component.scss']
})
export class QuizzQuestionComponent implements OnInit {
  subscription: Subscription;

  // tslint:disable-next-line: no-output-native
  @Output() end = new EventEmitter<boolean>();
  @Output() sendAnswered = new EventEmitter<boolean>();
  @Output() sendCorrect = new EventEmitter<boolean>();

  answered: number = 0;
  quiz: object[];
  question: any;

  isCorrect: boolean = false;
  isAnswered: boolean = false;
  currAnswer: any;

  constructor(private trivia: RandomizeTriviaService, private timer: ActionsService) {
    timer.nextForced$.subscribe(() => {
      this.timesUp();
    });
  }

  ngOnInit() {
    this.quiz = this.trivia.randomize();
    this.question = this.trivia.setQuestion(this.quiz[this.answered]);
  }

  submitAnswer(clicked) {
    this.answered++;
    this.sendAnswered.emit();
    this.isAnswered = true;
    this.timer.pauseQuizTimer();
    // @ts-ignore
    this.currAnswer = this.question.answers[clicked];

    if (this.currAnswer.correct === true) {
      this.isCorrect = true;
      this.sendCorrect.emit();
    }
  }

  nextQuestion() {
    if (this.answered >= this.quiz.length) {
      this.timer.pauseQuizTimer();
      this.end.emit();
    } else {
      this.question = this.trivia.setQuestion(this.quiz[this.answered]);
      this.isAnswered = false;
      this.isCorrect = false;
      this.timer.resetQuizTimer();
      // this.timer.startQuizTimer();
    }
  }

  timesUp() {
    this.answered++;
    this.sendAnswered.emit();
    this.nextQuestion();
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
