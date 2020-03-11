import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzQuestionService } from '../../services/quizz-question.service';
import { QuizzTimerService } from '../../services/quizz-timer.service';

@Component({
  selector: 'app-quizz-question',
  templateUrl: './quizz-question.component.html',
  styleUrls: ['./quizz-question.component.scss']
})
export class QuizzQuestionComponent implements OnInit {
  qns: any = [];
  seconds: number;
  timer;
  qnProgress: number;
  constructor( private router: Router, private quizService: QuizzQuestionService ) {

    }

  ngOnInit() {

    this.quizService.seconds = 0;
    this.quizService.qnProgress = 0;

    this.quizService.getQuestion().subscribe(
      (data: any) => {
        this.qns = data;
        this.startTimer();
        console.log('componente', this.qns.question[0]);
      }
    );
  }

  startTimer() {
    this.quizService.timer = setInterval(() => {
      this.quizService.seconds++;
    }, 1000);
  }

  answer() {
    this.router.navigate(['/quizz-result']);
  }
}
