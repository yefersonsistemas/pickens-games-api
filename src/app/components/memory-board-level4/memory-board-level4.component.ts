import { Component, OnInit } from '@angular/core';
import { MemoryGameService } from 'src/app/services/memory-game.service';

@Component({
  selector: 'app-memory-board-level4',
  templateUrl: './memory-board-level4.component.html',
  styleUrls: ['./memory-board-level4.component.scss']
})
export class MemoryBoardLevel4Component implements OnInit {

  nivel:number;
  ruta:string;

  constructor(public gameService: MemoryGameService) { }

  ngOnInit() {
    this.nivel = 4;
    this.ruta = 'memory-board-level5';
    console.log('ruta', this.ruta);
  }

}


