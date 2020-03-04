import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoryRankingService {

  constructor() { }
  getList() {
    const stringRanking = localStorage.getItem('pickensgames/memory-ranking') || JSON.stringify([]);
    const list = JSON.parse(stringRanking);

    list.sort(( a, b ) => a.rounds - b.rounds);

    return list;
  }

  addPlayer(player) {
    const list = this.getList();
     list.push(player);
    localStorage.setItem('pickensgames/memory-ranking', JSON.stringify(list));
  }
}
