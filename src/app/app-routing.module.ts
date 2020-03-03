import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListGamesComponent } from './components/list-games/list-games.component';
import { MemoryPlayingComponent } from './components/memory-playing/memory-playing.component';
import { HangPlayingComponent } from './components/hang-playing/hang-playing.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'list-games', component: ListGamesComponent },
  { path: 'memory-playing', component: MemoryPlayingComponent },
  { path: 'hang-playing', component: HangPlayingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
