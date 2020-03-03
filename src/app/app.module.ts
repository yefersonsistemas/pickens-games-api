import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    MemoryRankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
