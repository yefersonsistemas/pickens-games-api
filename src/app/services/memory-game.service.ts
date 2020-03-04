import { Injectable } from '@angular/core';
import { MemoryCardService } from './memory-card.service';
import { MemoryRankingService } from './memory-ranking.service';
import { Router } from '@angular/router';
import { Card } from '../entities/card.clss';

@Injectable({
  providedIn: 'root'
})
export class MemoryGameService {

  cards: Card[] = [];
  activeCards: Card[] = [];
  isBoardLocked = false;
  isCheatActivated = false;
  rounds = 0;
  playerName: string;

  constructor( private cardService: MemoryCardService, private rankingService: MemoryRankingService,
    // tslint:disable-next-line: align
    private router: Router) {
    this.cards = this.cardService.getCards();
    }

    // Metodo cuando se termina el juego (cuando todas las cartas estan visibles)
    get isGameOver(): boolean {
      return this.cards.every( card => card.visible === true);
    }
    // Metodo para descubrir la carta, hacer el conteo de los movientos y terminar el juego.
    showCard( card: Card ): void {
      if (!this.isMoveValid()) return;

      if (this.isCardValid(card)) {
        this.activeCards.push(card);
        card.show();
      }

      if (this.activeCards.length === 2) {
        this.runRound();
      }

      if (this.isGameOver) {
        this.addPlayerInRanking(); //agregar jugador a la tabla de posiciones
      }
    }

    playAgain(): void {
      this.router.navigate(['memory-playing']);
      this.cards = this.cardService.getCards();
      this.activeCards = [];
      this.rounds = 0;
      this.isBoardLocked = false;
    }

    toggleCheat(): void {
      this.isCheatActivated = !this.isCheatActivated;
    }

    private isMoveValid(): boolean {
      return !this.isGameOver && !this.isBoardLocked;
    }

    private runRound() {
      this.lockBoard();

      if (this.isMatch()) {
        this.activeCards = [];
        this.unlockBoard();
      } else {
        setTimeout(() => {
          this.hideSelectedCards();
          this.unlockBoard();
        }, 500);
      }

      this.rounds++;
    }

    private isCardValid( card: Card ): boolean {
      return this.activeCards.length < 2 && !card.visible;
    }

    private lockBoard(): void {
      this.isBoardLocked = true;
    }

    private unlockBoard(): void {
      this.isBoardLocked = false;
    }

    private isMatch(): boolean {
      return this.activeCards[0].id === this.activeCards[1].id;
    }

    private hideSelectedCards(): void {
      this.activeCards[0].hide();
      this.activeCards[1].hide();
      this.activeCards = [];
    }

    private addPlayerInRanking(): void {
      this.rankingService.addPlayer({
        name: this.playerName,
        rounds: this.rounds,
        // time: this.time,
      });
    }
}
