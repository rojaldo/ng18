import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-display',
  standalone: true,
  imports: [],
  templateUrl: './calculator-display.component.html',
  styleUrl: './calculator-display.component.scss'
})
export class CalculatorDisplayComponent {
  @Input() data = '';

}
