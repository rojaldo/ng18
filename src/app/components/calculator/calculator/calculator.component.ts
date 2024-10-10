import { Component, Inject, OnInit } from '@angular/core';
import { CalculatorService } from '../../../services/calculator.service';
import { CalculatorDisplayComponent } from '../calculator-display/calculator-display.component';
import { CalculatorKeyboardComponent } from '../calculator-keyboard/calculator-keyboard.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CalculatorDisplayComponent, CalculatorKeyboardComponent],
  providers: [CalculatorService],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent implements OnInit {

  display = '';

  constructor(private service: CalculatorService) {
  }
  ngOnInit(): void {
    this.service.display$.subscribe(
      display => {
        this.display = display;
      });
  }

  
  handleClick(value: number | string) {
    this.service.process(value);
    
  }


}
