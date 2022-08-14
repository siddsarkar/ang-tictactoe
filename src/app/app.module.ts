import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BoardComponent } from './board/board.component'
import { GameComponent } from './game/game.component'
import { SquareComponent } from './square/square.component'

@NgModule({
  declarations: [AppComponent, BoardComponent, SquareComponent, GameComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
