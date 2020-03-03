import { Component, OnInit } from '@angular/core';
import { HangManService } from 'src/app/services/hang-man.service';


export interface LetterChoice {
  value: string;
  selected: string;
}

@Component({
  selector: 'app-hang-letters-choice',
  templateUrl: './hang-letters-choice.component.html',
  styleUrls: ['./hang-letters-choice.component.scss']
})
export class HangLettersChoiceComponent implements OnInit {

  constructor(public hangService: HangManService) { }

  ngOnInit() {
  }

  tryLetter(letter: string) {

    if (this.hangService.getLetterInfo(letter).tried || this.hangService.isFinished()) {
      console.log('Letter already picked or game over');
      return;
    }

    this.hangService.tryLetter(letter);
  }

  getSelectedClass(letter: string): string {
      return (this.hangService.getLetterInfo(letter).tried) ? 'choiceLetterWrapper selected' : 'choiceLetterWrapper';
  }

}
