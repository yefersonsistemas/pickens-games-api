import { Component, OnInit , Output, EventEmitter, Input} from '@angular/core';
import { MemoryGameService } from 'src/app/services/memory-game.service';
import { Level } from 'src/app/entities/level.class';

@Component({
  selector: 'app-memory-board',
  templateUrl: './memory-board.component.html',
  styleUrls: ['./memory-board.component.scss']
})


export class MemoryBoardComponent implements OnInit {
  nivel: number;
  ruta:string;

  constructor(public gameService: MemoryGameService) { }

  ngOnInit() {
    this.nivel = 1;
    this.ruta = 'memory-board-level2';
  }

}
