import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
  @Output() onClick = new EventEmitter<string>()
  @Input() value = ''

  onClicked() {
    this.onClick.emit()
  }
}
