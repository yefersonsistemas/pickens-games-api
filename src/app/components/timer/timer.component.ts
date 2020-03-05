import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { MemoryCurrentPlayerService } from 'src/app/services/memory-current-player.service';
import { Router } from '@angular/router';
import { MemoryGameService } from 'src/app/services/memory-game.service';
import { Level } from 'src/app/entities/level.class';

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
  private nivel;

  @Input() level:number;

  //Component Interaction
  @Input() stopTimer: Boolean;
  @Output() timeTaken: EventEmitter<String> = new EventEmitter();
  @Output() timesUpEvent: EventEmitter<Boolean> = new EventEmitter();
 
  constructor(private player: MemoryCurrentPlayerService, private router: Router, public game: MemoryGameService) {
  }

  ngOnInit() {
    if(this.level == 1){
      this.min = 0;
      this.sec = 60;
    }

    if(this.level == 2){
      this.min = 0;
      this.sec = 55;
    }

    if(this.level == 3){
      this.min = 0;
      this.sec = 50;
    }

    if(this.level == 4){
      this.min = 0;
      this.sec = 45;
    }

    // if(this.level == 5){
    //   this.min = 0;
    //   this.sec = 40;
    // }

    this.startCountDown();
  }

  //averiguando 
  startCountDown(): void {
    console.log('Starting count down...');
    this.counter = setInterval(() => {
      // this.battleInit() e ejecuta cada 5 segundos, incluso después de que el usuario se aleje de esta página.
      this.sec--;
      this.time = this.getTime();

      //Fin del temporizador.
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

      //Gire al temporizador Naranja
      if (this.min < 1) {
        this.minLeft = true;
      }

      //Gire al temporizador Roja
      if (this.sec < 30 && this.min < 1) {
        this.minLeft = false;
        this.secLeft = true;
      }

      if (this.game.isGameOver){
        // this.game.playAgain();
        clearInterval(this.counter);
        // this.timesUpEvent.emit(true);
      }
    }, 1000);
  }
  //culmina el averiguar

  stopCountDown(): void {
    clearInterval(this.counter); //para detener el setInterval()
    
    this.calculateTimeRemaining();
    this.player.setUserTime(
      `${this.addZero(this.min)}: ${this.addZero(this.sec)}`,
    );
    this.player.addNewPlayer();

    setTimeout(() => {

      // this.router.navigate(['/modal-cronometro']);
      this.game.playAgains()
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

      this.timeTaken.emit(`${this.addZero(this.min)}:${this.addZero(this.sec)}`); //que cuando este cero se termine
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

