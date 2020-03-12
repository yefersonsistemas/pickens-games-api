import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-quizz-ranking',
  templateUrl: './quizz-ranking.component.html',
  styleUrls: ['./quizz-ranking.component.scss']
})
export class QuizzRankingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
