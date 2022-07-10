import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, CoreModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// https://www.starwars.com/films/star-wars-episode-iv-a-new-hope
// https://www.ea.com/ru-ru/games/starwars/battlefront/star-wars-battlefront-2
// https://www.ea.com/games/starwars/jedi/jedi-fallen-order?isLocalized=true
// https://www.ea.com/games/starwars?isLocalized=true
