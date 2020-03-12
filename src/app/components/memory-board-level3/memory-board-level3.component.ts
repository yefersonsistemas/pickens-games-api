import { Component, OnInit } from '@angular/core';
import { MemoryGameService } from 'src/app/services/memory-game.service';

@Component({
  selector: 'app-memory-board-level3',
  templateUrl: './memory-board-level3.component.html',
  styleUrls: ['./memory-board-level3.component.scss']
})
export class MemoryBoardLevel3Component implements OnInit {
  nivel:number;
  ruta:string;
  
  constructor(public gameService: MemoryGameService) { }

  ngOnInit() {
    this.nivel = 3
    this.ruta = 'memory-board-level4';
  }

}

