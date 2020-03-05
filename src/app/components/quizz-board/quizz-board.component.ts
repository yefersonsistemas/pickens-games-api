import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz-board',
  templateUrl: './quizz-board.component.html',
  styleUrls: ['./quizz-board.component.scss']
})
export class QuizzBoardComponent  {

  start: boolean = true;
  end: boolean = false;
  correct: number = 0;
  answered: number = 0;

  constructor() { }

  changeStart() {
    this.start = false;
  }

  changeEnd() {
    this.end = true;
  }

  answeredQuestion() {
  this.answered++;
  }

  answerCorrect() {
    this.answered++;
    }

  playAgain() {
    this.start = true;
    this.end = false;
    this.correct = 0;
    this.answered = 0;
  }

}
