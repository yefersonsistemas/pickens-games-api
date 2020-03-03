import { Component, OnInit } from '@angular/core';
import { HangManService } from 'src/app/services/hang-man.service';

@Component({
  selector: 'app-hang-pic',
  templateUrl: './hang-pic.component.html',
  styleUrls: ['./hang-pic.component.scss']
})
export class HangPicComponent implements OnInit {

  picPrefix = 'Hangman ';
  picSufix = '.png';

  constructor(public hangService: HangManService) { }

  ngOnInit() {
  }

  getHangPicture(): string {
    let stepNum = this.hangService.MAX_STEPS - this.hangService.numberStepLeft + 1;
    if (!stepNum) {
      stepNum = 1;
    }

    return this.hangService.PICS_FOLDER + this.picPrefix + stepNum + this.picSufix;
  }

}
