import { Injectable } from '@angular/core';
import { Block } from '../entities/block.class';
import { Player } from '../entities/player.class';

@Injectable({
  providedIn: 'root'
})
export class TictactoeService {

  players = [];
  turn: number = 0; // por defecto hay que inicializarlo en 0
  draw: number = 0;

  blocks = [];
  freeBlockRemaining = 9;

  constructor() { }

  initBlocks() {
    this.blocks = [];

    for (let i = 1; i <= 9; ++i) {
      const block = new Block;

      block.free = true;
      block.value = '';
      block.symbol = '';

      this.blocks.push(block);
    }
  }

  initPlayers() {
    this.players = [];

    const player1 = new Player();
    player1.bot = false;

    const player2 = new Player();

    this.players.push(player1);
    this.players.push(player2);
}
}
