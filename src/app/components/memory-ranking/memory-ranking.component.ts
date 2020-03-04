import { Component, OnInit } from '@angular/core';
import { MemoryRankingService } from 'src/app/services/memory-ranking.service';
import { MemoryGameService } from 'src/app/services/memory-game.service';

@Component({
  selector: 'app-memory-ranking',
  templateUrl: './memory-ranking.component.html',
  styleUrls: ['./memory-ranking.component.scss']
})
export class MemoryRankingComponent implements OnInit {

  constructor( public rankingService: MemoryRankingService, public gameService: MemoryGameService) { }

  ngOnInit() {
  }

}
