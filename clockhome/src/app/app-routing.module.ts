import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueComponent } from './components/league/league.component';
import { PathfinderComponent } from './components/pathfinder/pathfinder.component';
import { PokewatchComponent } from './components/pokewatch/pokewatch.component';

export const routes: Routes = [
  { path: 'pokewatch', component: PokewatchComponent },
  { path: 'pathfinder', component: PathfinderComponent },
  { path: 'league', component: LeagueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
