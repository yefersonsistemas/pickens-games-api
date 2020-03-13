import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';


export interface PeriodicElement {
  name: string;
  score: string;
  time: string;
}

@Component({
  selector: 'app-quizz-ranking',
  templateUrl: './quizz-ranking.component.html',
  styleUrls: ['./quizz-ranking.component.scss']
})
export class QuizzRankingComponent implements AfterViewInit {

  displayedColumns: string[] =  ['name', 'score', 'time'];

  constructor() { }

  ngAfterViewInit() {
  }

}
