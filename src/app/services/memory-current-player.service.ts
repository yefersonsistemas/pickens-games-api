import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoryCurrentPlayerService {

  constructor() { }

  private name: string;
  private time: string;
  private turns: number;


  setName(name: string) {
    this.name = name;
  }

  getName(): string {
    if (this.name != null || this.name != '') return this.name;

    return 'Enter player name!';
  }

  getUserTime() {
    return this.time;
  }

  getUserClicks() {
    return this.turns;
  }

  setUserTime(time: string) {
    this.time = time;
  }

  setUserClicks(turns: number) {
    this.turns = turns;
  }

  addNewPlayer() {
    const user = {
      name: this.name,
      time: this.time,
      turns: this.turns,
    };

  }
}

