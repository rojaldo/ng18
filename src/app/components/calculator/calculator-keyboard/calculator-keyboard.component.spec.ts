import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorKeyboardComponent } from './calculator-keyboard.component';

describe('CalculatorKeyboardComponent', () => {
  let component: CalculatorKeyboardComponent;
  let fixture: ComponentFixture<CalculatorKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorKeyboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
