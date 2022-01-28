import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokewatchComponent } from './components/pokewatch/pokewatch.component';

export const routes: Routes = [
  { path: 'pokewatch', component: PokewatchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
