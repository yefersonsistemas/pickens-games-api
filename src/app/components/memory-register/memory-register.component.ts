import { Component, OnInit } from '@angular/core';
import { MemoryGameService } from 'src/app/services/memory-game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memory-register',
  templateUrl: './memory-register.component.html',
  styleUrls: ['./memory-register.component.scss']
})
export class MemoryRegisterComponent implements OnInit {

  constructor( public gameService: MemoryGameService, public router: Router) { }

  startGame() {
    if ( this.gameService.playerName && this.gameService.playerName.trim()) {
    this.router.navigate(['memory-playing']);
    }
  }


  ngOnInit() {
  }

}
