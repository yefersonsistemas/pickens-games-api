import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizz-question',
  templateUrl: './quizz-question.component.html',
  styleUrls: ['./quizz-question.component.scss']
})
export class QuizzQuestionComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  answer() {
    this.router.navigate(['/quizz-result']);
  }
}
