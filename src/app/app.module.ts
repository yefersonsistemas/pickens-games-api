import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { MemoryBoardLevel5Component } from './components/memory-board-level5/memory-board-level5.component';
import { MemoryBoardLevelFinalComponent } from './components/memory-board-level-final/memory-board-level-final.component';
import { QuizzPlayingComponent } from './components/quizz-playing/quizz-playing.component';
import { QuizzQuestionComponent } from './components/quizz-question/quizz-question.component';
import { QuizzRegisterComponent } from './components/quizz-register/quizz-register.component';
import { QuizzResultComponent } from './components/quizz-result/quizz-result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { QuizzRankingComponent } from './components/quizz-ranking/quizz-ranking.component';
import { HangRegisterComponent } from './components/hang-register/hang-register.component';


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
    MemoryBoardLevel5Component,
    MemoryBoardLevelFinalComponent,
    QuizzPlayingComponent,
    QuizzQuestionComponent,
    QuizzRegisterComponent,
    QuizzResultComponent,
    QuizzRankingComponent,
    HangRegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
