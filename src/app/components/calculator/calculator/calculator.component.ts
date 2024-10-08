import { Component } from '@angular/core';
import { CalculatorService } from '../../../services/calculator.service';
import { CalculatorDisplayComponent } from '../calculator-display/calculator-display.component';
import { CalculatorKeyboardComponent } from '../calculator-keyboard/calculator-keyboard.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CalculatorDisplayComponent, CalculatorKeyboardComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  display = '';

  constructor(private service: CalculatorService) {
  }

  
  handleClick(value: number | string) {
    this.display = this.service.process(value);
    
  }


}
