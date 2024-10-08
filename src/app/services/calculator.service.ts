import { Injectable } from '@angular/core';

enum State {
  INIT,
  FIRST_NUMBER,
  SECOND_NUMBER,
  RESULT
}

@Injectable()
export class CalculatorService {

  private _display = '';
  private _currentState = State.INIT;
  private _firstFigure = 0;
  private _secondFigure = 0;
  private _operator = '';
  private _result = 0;

  constructor() { }

  
  process(value: number | string): string {

    if (typeof value === 'number') {
      this._handleNumber(value);
    }
    else {
      this._handleSymbol(value);
    }
    return this._display;
  }

  private _handleNumber(value: number) {
    switch (this._currentState) {
      case State.INIT:
        this._firstFigure = value;
        this._display = value.toString();
        this._currentState = State.FIRST_NUMBER;
        break;
      case State.FIRST_NUMBER:
        this._firstFigure = this._firstFigure * 10 + value;
        this._display += value.toString(); 
        break;
      case State.SECOND_NUMBER:
        this._secondFigure = this._secondFigure * 10 + value;
        this._display += value.toString(); 
        break;
      case State.RESULT:
        this._clearCalculator();
        this._firstFigure = value;
        this._display = value.toString();
        this._currentState = State.FIRST_NUMBER;
        break;
    }
  }

  private _handleSymbol(value: string) {
    value === 'AC' ? this._clearCalculator() : null;
    switch (this._currentState) {
      case State.FIRST_NUMBER:
        if (value === '+' || value === '-' || value === '*' || value === '/') {
          this._operator = value;
          this._display += value;
          this._currentState = State.SECOND_NUMBER;
        }
        break;
      case State.SECOND_NUMBER:
        if(value === '=') {
          this._result = this._resolve();
          this._display += value + this._result;
          this._currentState = State.RESULT;
        }
        break;
      case State.RESULT:
        if (value === '+' || value === '-' || value === '*' || value === '/') {
          let tmp = this._result;
          this._clearCalculator();
          this._firstFigure = tmp;
          this._display = tmp.toString() + value;
          this._operator = value;
          this._currentState = State.SECOND_NUMBER;
        }
        break;
    }
  }

  private _clearCalculator() {
    this._display = '';
    this._firstFigure = 0;
    this._secondFigure = 0;
    this._operator = '';
    this._result = 0;
    this._currentState = State.INIT;
  }

  private _resolve(): number{
    switch (this._operator) {
      case '+':
        return this._firstFigure + this._secondFigure;
      case '-':
        return this._firstFigure - this._secondFigure;
      case '*':
        return this._firstFigure * this._secondFigure;
      case '/':
        return this._firstFigure / this._secondFigure;
      default:
        throw new Error('Invalid operator');
    }
  }

}
