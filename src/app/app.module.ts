import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoryBoardComponent } from './components/memory-board/memory-board.component';
import { HangFindComponent } from './components/hang-find/hang-find.component';
import { HangLettersChoiceComponent } from './components/hang-letters-choice/hang-letters-choice.component';
import { HangPicComponent } from './components/hang-pic/hang-pic.component';
import { HangPlayingComponent } from './components/hang-playing/hang-playing.component';
import { HangResultComponent } from './components/hang-result/hang-result.component';
import { HomeComponent } from './components/home/home.component';
import { ListGamesComponent } from './components/list-games/list-games.component';
import { MemoryButtonComponent } from './components/memory-button/memory-button.component';
import { MemoryButtonExitComponent } from './components/memory-button-exit/memory-button-exit.component';
import { MemoryCardComponent } from './components/memory-card/memory-card.component';
import { MemoryModalComponent } from './components/memory-modal/memory-modal.component';
import { MemoryPlayingComponent } from './components/memory-playing/memory-playing.component';
import { MemoryRankingComponent } from './components/memory-ranking/memory-ranking.component';
import { HttpClientModule } from '@angular/common/http';
import { TimerComponent } from './components/timer/timer.component';
import { ModalCronometroComponent } from './components/modal-cronometro/modal-cronometro.component';
import { MemoryRegisterComponent } from './components/memory-register/memory-register.component';

import { MemoryBoardLevel2Component } from './components/memory-board-level2/memory-board-level2.component';
import { MemoryBoardLevel3Component } from './components/memory-board-level3/memory-board-level3.component';
import { MemoryBoardLevel4Component } from './components/memory-board-level4/memory-board-level4.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoryBoardComponent,
    HangFindComponent,
    HangLettersChoiceComponent,
    HangPicComponent,
    HangPlayingComponent,
    HangResultComponent,
    HomeComponent,
    ListGamesComponent,
    MemoryButtonComponent,
    MemoryButtonExitComponent,
    MemoryCardComponent,
    MemoryModalComponent,
    MemoryPlayingComponent,
    MemoryRankingComponent,
    TimerComponent,
    ModalCronometroComponent,
    MemoryRegisterComponent,
    MemoryBoardLevel2Component,
    MemoryBoardLevel3Component,
    MemoryBoardLevel4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
