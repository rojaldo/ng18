import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from "./components/calculator/calculator/calculator.component";
import { CalculatorService } from './services/calculator.service';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { HeroesService } from './services/heroes.service';
import { ApodComponent } from "./components/apod/apod/apod.component";
import { ApodService } from './services/apod.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgbNavModule, CalculatorComponent, HeroesComponent, ApodComponent],
  providers: [CalculatorService, HeroesService, ApodService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng18';
  active = 'apod';

}
