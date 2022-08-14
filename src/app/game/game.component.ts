import { Component } from '@angular/core'
import { GameService } from '../services/game.service'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  history = this.game.state.history
  current = this.history[this.game.state.stepNumber]
  winner = this.game.calculateWinner(this.current.squares)

  constructor(public game: GameService) {
    this.game.on('stateChanged', this.onGameStateChanged.bind(this))
  }

  onGameStateChanged() {
    this.history = this.game.state.history
    this.current = this.history[this.game.state.stepNumber]
    this.winner = this.game.calculateWinner(this.current.squares)
  }

  jumpTo(step: number) {
    this.game.jumpTo(step)
  }

  onSquareClick(squareIndex: number) {
    this.game.handleClick(squareIndex)
  }
}
