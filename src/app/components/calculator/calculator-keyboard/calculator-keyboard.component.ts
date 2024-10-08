import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-keyboard',
  standalone: true,
  imports: [],
  templateUrl: './calculator-keyboard.component.html',
  styleUrl: './calculator-keyboard.component.scss'
})
export class CalculatorKeyboardComponent {

  @Output() keyPressed = new EventEmitter<number | string>();

  handleClick(value: number | string) {
    this.keyPressed.emit(value);
  }

}
