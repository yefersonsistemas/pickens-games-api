import { Component, OnInit } from '@angular/core';
import { HangManService, HangLetter } from 'src/app/services/hang-man.service';

@Component({
  selector: 'app-hang-find',
  templateUrl: './hang-find.component.html',
  styleUrls: ['./hang-find.component.scss']
})
export class HangFindComponent implements OnInit {

  constructor(public hangManService: HangManService) { }

  ngOnInit() {
  }

  
  getLetterClass(letter: string): string {
    let letterClass = 'findLetter';

    const letterInfo: HangLetter = this.hangManService.getLetterInfo(letter);

    if (letterInfo.revealedFromInit) {
    letterClass += ' letterFromInit';
    } else if (letterInfo.revealedFromUser) {
    letterClass += ' letterFromUser';
        }

    return letterClass;
  }

  getBorderClass(letter: string): string {
    let borderClass = 'borderLetter';

    if (this.hangManService.getLetterInfo(letter).revealedFromUser) {
      borderClass += ' borderFromUser';
    }
    return borderClass;
  }

}
