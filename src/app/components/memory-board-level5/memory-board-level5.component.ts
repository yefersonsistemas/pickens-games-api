import { Component, OnInit } from '@angular/core';
import { MemoryGameService } from 'src/app/services/memory-game.service';

@Component({
  selector: 'app-memory-board-level5',
  templateUrl: './memory-board-level5.component.html',
  styleUrls: ['./memory-board-level5.component.scss']
})
export class MemoryBoardLevel5Component implements OnInit {
  nivel:number;
  ruta:string;
  
  constructor(public gameService: MemoryGameService) { }

  ngOnInit() {
    this.nivel = 5;
    this.ruta = 'list-games';
  }

}


