import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  @Output() onSquareClicked = new EventEmitter<number>()
  @Input() squares: string[] = []
}
