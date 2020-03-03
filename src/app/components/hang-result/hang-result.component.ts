import { Component, OnInit } from '@angular/core';
import { HangManService } from 'src/app/services/hang-man.service';

@Component({
  selector: 'app-hang-result',
  templateUrl: './hang-result.component.html',
  styleUrls: ['./hang-result.component.scss']
})
export class HangResultComponent implements OnInit {

     // Se Usa para el llamado de las fotos dependiendo del estado (SUCCESS_STATUS O FAIl_STATUS)
    readonly hangSuccess: string = 'yes';
    readonly hangFailure: string = 'shit';
    readonly picSufix: string = '_symbol.png';
  
    readonly failWords: Array<string> = ['Fallaste!!'];
    readonly successWords: Array<string> = ['Lo Lograste!!'];
  
  
    statusClass = '';
    statusWords: Array<string> = null;
    pictureURL = '';
  
    constructor(public hangService: HangManService) { }
  
    ngOnInit() {
  
      this.hangService.endGameStatus$.subscribe(gameStatus => {
          if (gameStatus == this.hangService.FAIL_STATUS) {
            this.pictureURL = this.hangService.PICS_FOLDER + this.hangFailure + this.picSufix;
            this.statusWords = this.failWords;
            this.statusClass = 'failStatus';
  
          } else
          if (gameStatus == this.hangService.SUCCESS_STATUS) {
            this.pictureURL = this.hangService.PICS_FOLDER + this.hangSuccess + this.picSufix;
            this.statusWords = this.successWords;
            this.statusClass = 'successStatus';
  
          }
        });
    }

}
