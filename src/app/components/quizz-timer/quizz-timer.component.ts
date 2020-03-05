import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActionsService } from 'src/app/services/actions.service';

@Component({
  selector: 'app-quizz-timer',
  templateUrl: './quizz-timer.component.html',
  styleUrls: ['./quizz-timer.component.scss']
})
export class QuizzTimerComponent {
  subscription: Subscription;
  ticks: number = 500;
  timer: any[] = new Array(this.ticks);
  pause: boolean = false;

  constructor(private timerAction: ActionsService) {
    timerAction.timerStarted$.subscribe(() => {
      this.startTimer();
    });
    timerAction.timerStopped$.subscribe(data => {
      this.pause = data;
      this.timerAction.addTime(this.ticks);
    });
    timerAction.timerReset$.subscribe(data => {
      this.ticks = data;
      this.timer = new Array(this.ticks);
    });
  }

  startTimer() {
    if (this.ticks > 0 && !this.pause) {
      this.ticks--;
      this.timer = new Array(this.ticks);
      setTimeout(() => this.startTimer(), 20);
    } else if (this.ticks === 0) {
      this.timerAction.addTime(this.ticks);
      this.timerAction.forceNextQuestion();
    }
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
