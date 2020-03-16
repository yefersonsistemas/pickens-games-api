import { Component, OnInit } from '@angular/core';
import { TictactoeService } from 'src/app/services/tictactoe.service';

@Component({
  selector: 'app-tictactoc-board',
  templateUrl: './tictactoc-board.component.html',
  styleUrls: ['./tictactoc-board.component.scss']
})
export class TictactocBoardComponent implements OnInit {

  constructor(public ticService: TictactoeService) { }

  ngOnInit() {
  }

}
