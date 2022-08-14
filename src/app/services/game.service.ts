import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class GameService {
  state = {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    xIsNext: true,
    stepNumber: 0
  }

  private eventListeners: { [key: string]: Function[] } = {}

  on(event: string, callback: Function) {
    if (!this.eventListeners[event]) {
      this.eventListeners[event] = []
    }
    this.eventListeners[event].push(callback)
  }

  emit(event: string, ...args: unknown[]) {
    if (!this.eventListeners[event]) {
      return
    }
    this.eventListeners[event].forEach((callback) => callback(...args))
  }

  handleClick(squareIndex: number) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (this.calculateWinner(squares) || squares[squareIndex]) {
      return
    }
    squares[squareIndex] = this.state.xIsNext ? 'X' : 'O'
    this.state.history = history.concat([
      {
        squares: squares
      }
    ])
    this.state.stepNumber = history.length
    this.state.xIsNext = !this.state.xIsNext

    this.emit('stateChanged')
  }

  jumpTo(step: number) {
    this.state.stepNumber = step
    this.state.xIsNext = step % 2 === 0

    this.emit('stateChanged')
  }

  calculateWinner(squares: { [key: number]: string }): string | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }
}
