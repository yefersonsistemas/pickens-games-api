import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { QuizzTimerService } from '../../services/quizz-timer.service';

@Component({
  selector: 'app-quizz-instruction',
  templateUrl: './quizz-instruction.component.html',
  styleUrls: ['./quizz-instruction.component.scss']
})
export class QuizzInstructionComponent {

  @Output() start = new EventEmitter<boolean>();

  constructor( private timer: QuizzTimerService) { }

  startQuiz() {
    this.start.emit();
    this.timer.startQuizTimer();
  }

}
