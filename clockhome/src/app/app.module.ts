import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokewatchComponent } from './components/pokewatch/pokewatch.component';
import { DateService } from './services/date.service';

@NgModule({
  declarations: [
    AppComponent,
    PokewatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
