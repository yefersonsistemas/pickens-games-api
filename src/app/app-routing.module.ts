import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListGamesComponent } from './components/list-games/list-games.component';
import { MemoryPlayingComponent } from './components/memory-playing/memory-playing.component';
import { HangPlayingComponent } from './components/hang-playing/hang-playing.component';
import { ModalCronometroComponent } from './components/modal-cronometro/modal-cronometro.component';
import { MemoryBoardLevel2Component } from './components/memory-board-level2/memory-board-level2.component';
import { MemoryBoardLevel3Component } from './components/memory-board-level3/memory-board-level3.component';
import { MemoryBoardLevel4Component } from './components/memory-board-level4/memory-board-level4.component';
import { QuizzPlayingComponent } from './components/quizz-playing/quizz-playing.component';

import { MemoryBoardLevel5Component } from './components/memory-board-level5/memory-board-level5.component';
import { MemoryBoardLevelFinalComponent } from './components/memory-board-level-final/memory-board-level-final.component';
import { QuizzQuestionComponent } from './components/quizz-question/quizz-question.component';
import { QuizzResultComponent } from './components/quizz-result/quizz-result.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'list-games', component: ListGamesComponent },
  { path: 'memory-playing', component: MemoryPlayingComponent },
  { path: 'hang-playing', component: HangPlayingComponent },
  { path: 'modal-cronometro', component: ModalCronometroComponent },
  { path: 'memory-board-level2', component: MemoryBoardLevel2Component },
  { path: 'memory-board-level3', component: MemoryBoardLevel3Component },
  { path: 'memory-board-level4', component: MemoryBoardLevel4Component },
  { path: 'memory-board-level5', component: MemoryBoardLevel5Component },
  { path: 'memory-board-level-final', component: MemoryBoardLevelFinalComponent },
  { path: 'quizz-playing', component: QuizzPlayingComponent },
  { path: 'quizz-question', component: QuizzQuestionComponent },
  { path: 'quizz-result', component: QuizzResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
