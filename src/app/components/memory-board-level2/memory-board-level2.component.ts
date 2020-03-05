import { Component, OnInit } from '@angular/core';
import { MemoryGameService } from 'src/app/services/memory-game.service';

@Component({
  selector: 'app-memory-board-level2',
  templateUrl: './memory-board-level2.component.html',
  styleUrls: ['./memory-board-level2.component.scss']
})
export class MemoryBoardLevel2Component implements OnInit {

  nivel:number;

  constructor(public gameService: MemoryGameService) { }

  ngOnInit() {
    this.nivel = 2
  }


}


