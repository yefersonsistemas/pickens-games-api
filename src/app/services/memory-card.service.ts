import { Injectable } from '@angular/core';
import { Card } from '../entities/card.clss';
import { CARDS_IMAGES_PATHS } from '../config/images.config';

@Injectable({
  providedIn: 'root'
})
export class MemoryCardService {

  constructor() { }

  getCards(): Card[] {
    const cards = [];

    for (let i = 0; i < CARDS_IMAGES_PATHS.length; i++) {
      cards.push(new Card(i, CARDS_IMAGES_PATHS[i]));
      cards.push(new Card(i, CARDS_IMAGES_PATHS[i]));
    }
    this.shuffleArray(cards);
    return cards;
  }

  private shuffleArray(elements: any[]): void {
    for (let i = elements.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [elements[i], elements[j]] = [elements[j], elements[i]];
    }
  }

}
