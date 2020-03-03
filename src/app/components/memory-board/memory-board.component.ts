import { Component, OnInit } from '@angular/core';
import { MemoryGameService } from 'src/app/services/memory-game.service';

@Component({
  selector: 'app-memory-board',
  templateUrl: './memory-board.component.html',
  styleUrls: ['./memory-board.component.scss']
})
export class MemoryBoardComponent implements OnInit {

  constructor(public gameService: MemoryGameService) { }

  ngOnInit() {
  }

}
