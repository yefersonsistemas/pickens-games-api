import { Component, OnInit, Input } from '@angular/core';
import { MemoryGameService } from '../../services/memory-game.service';
import { Card } from 'src/app/entities/card.clss';

@Component({
  selector: 'app-memory-card',
  templateUrl: './memory-card.component.html',
  styleUrls: ['./memory-card.component.scss']
})
export class MemoryCardComponent implements OnInit {

  @Input() card: Card;

  constructor(public gameService: MemoryGameService) { }

  ngOnInit() {
  }

}
