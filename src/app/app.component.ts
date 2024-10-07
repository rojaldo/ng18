import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  display = 'none';
  private _counter = 0;

  handleClick() {
    this._counter++;
    this.display = this._counter.toString();
    console.log('handleClick');
    
  }
}
