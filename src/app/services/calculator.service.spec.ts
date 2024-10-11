import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check 1+2=3', () => {
    //ser private atribute _firstNumber = 1;
    (service as any)._firstFigure = 1;
    (service as any)._secondFigure = 2;
    const spy = spyOn(service as any, '_resolve').and.callThrough();

    expect(spy).toEqual(3);
    
  });
});
