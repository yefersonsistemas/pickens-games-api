import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { MemoryCurrentPlayerService } from 'src/app/services/memory-current-player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  //DOM variables
  private time;
  private min;
  private sec;
  private minLeft = false;
  private secLeft = false;
  private counter;

  //Component Interaction
  @Input() stopTimer: Boolean;
  @Output() timeTaken: EventEmitter<String> = new EventEmitter();
  @Output() timesUpEvent: EventEmitter<Boolean> = new EventEmitter();

  constructor(private player: MemoryCurrentPlayerService, private router: Router) {
    this.min = 1;
    this.sec = 1;

    this.startCountDown();
  }

  ngOnInit() {}

  //averiguando 
  startCountDown(): void {
    console.log('Starting count down...');

    this.counter = setInterval(() => {
      this.sec--;
      this.time = this.getTime();

      //End of the timer
      if (this.stopTimer == true) {
        this.stopCountDown();
      }

      if (this.getTime() === '00:00') {
        this.stopCountDown();
        this.timesUpEvent.emit(true);
      }

      if (this.sec === 0) {
        this.min--;
        this.sec = 60;
      }

      //Turn to timer Orange
      if (this.min < 1) {
        this.minLeft = true;
      }

      //Turn to timer Red
      if (this.sec < 30 && this.min < 1) {
        this.minLeft = false;
        this.secLeft = true;
      }
    }, 1000);
  }
  //culmina el averiguar

  stopCountDown(): void {
    clearInterval(this.counter);
    this.calculateTimeRemaining();
    this.player.setUserTime(
      `${this.addZero(this.min)}: ${this.addZero(this.sec)}`,
    );
    this.player.addNewPlayer();

    setTimeout(() => {

      this.router.navigate(['/modal-cronometro']);
    }, 1000);
  }

  //funcion que se llama en stopCountDown
    calculateTimeRemaining(): void {
      this.min = 1 - this.min;
      this.sec = 60 - this.sec;

      if (this.sec === 60) {
        this.min++;
        this.sec = 0;
      }

      this.timeTaken.emit(`${this.addZero(this.min)}:${this.addZero(this.sec)}`);
    }
//fin de funcion calculateTimeRemaining


//getTime
  getTime(): string {
    return `${this.addZero(this.min)}:${this.addZero(this.sec)}`;
  }
//fin de getTime


// Add Zeros
  addZero(number: number): string {
    return (number < 10 ? '0' : '') + number;
  }
//fin de Add Zeros
}

