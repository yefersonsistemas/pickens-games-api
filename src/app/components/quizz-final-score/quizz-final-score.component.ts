import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActionsService } from 'src/app/services/actions.service';

@Component({
  selector: 'app-quizz-final-score',
  templateUrl: './quizz-final-score.component.html',
  styleUrls: ['./quizz-final-score.component.scss']
})
export class QuizzFinalScoreComponent {

  subscription: Subscription;
  @Input('correct') correct: number;
  @Input('answered') answered: number;
  @Output() again = new EventEmitter<boolean>();
  time: number;
  average: number;

  constructor(private timer: ActionsService) {
    this.timer.timeTotaled$.subscribe(data => {
      data = (data * 20 ) / 1000;
      this.time = +data.toFixed(2);
      this.average = this.time / this.answered;
    });
  }

  playAgain() {
  location.reload();
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
