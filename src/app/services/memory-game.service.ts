import { Injectable } from '@angular/core';
import { MemoryCardService } from './memory-card.service';
import { MemoryRankingService } from './memory-ranking.service';
import { Router } from '@angular/router';
import { Card } from '../entities/card.clss';
import { HttpClient } from '@angular/common/http';
// import { Level } from '../entities/level.class';

const Url = 'http://127.0.0.1:8000/api/';
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
  phone: string;
  email: string;

  constructor( private cardService: MemoryCardService, private rankingService: MemoryRankingService,
    // tslint:disable-next-line: align
    private router: Router, private http: HttpClient) {
    this.cards = this.cardService.getCards();
    }

    // Metodo cuando se termina el juego (cuando todas las cartas estan visibles)
    get isGameOver(): boolean {
      return this.cards.every( card => card.visible === true);
    }
    // Metodo para descubrir la carta, hacer el conteo de los movientos y terminar el juego.
    showCard( card: Card ): void {
      
      if (!this.isMoveValid()) { return; }

      if (this.isCardValid(card)) {
        this.activeCards.push(card);
        card.show();
      }

      if (this.activeCards.length === 2) {
        this.runRound();
      }

      if (this.isGameOver) {
        this.addPlayerInRanking(); // agregar jugador a la tabla de posiciones cuando se termine el juego

      }
    }
    // para reiniciar el juego de memoria
 
    playLevel(ruta): void {
        this.router.navigate([ruta]);
      this.cards = this.cardService.getCards();
      this.activeCards = [];
      this.rounds = 0;
      this.isBoardLocked = false;
    }
  
    playAgains33(): void {
      this.router.navigate(['modal-cronometro']);
      // this.cards = this.cardService.getCards();
      // this.activeCards = [];
      // this.rounds = 0;
      // this.isBoardLocked = false;
    }
    // pasa salir a la lista de los juegos y reiniciar el juego
    playAgains(): void {
      this.router.navigate(['list-games']);
      this.cards = this.cardService.getCards();
      this.activeCards = [];
      this.rounds = 0;
      this.isBoardLocked = false;
    }
    // para ver los id ocultos de las cartas
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
    // oculta las cartas volteadas si no coinciden
    private hideSelectedCards(): void {
      this.activeCards[0].hide();
      this.activeCards[1].hide();
      this.activeCards = [];
    }

    private addPlayerInRanking(): void {
      this.rankingService.addPlayer({
        name: this.playerName,
        rounds: this.rounds,
        phone: this.phone,
        email: this.email,
        // time: this.time,
      });
    }

    registerParticipant(name: string, email: string, phone: string) {
      const data = {
        name,
        email,
        phone,
      };
      console.log('servicio', data);
      return this.http.post( Url + 'register/memory', data);
    }

}
