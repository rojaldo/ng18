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
import { CountriesComponent } from "./components/fwf/countries/countries.component";
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgbNavModule, CalculatorComponent, HeroesComponent, ApodComponent, CountriesComponent],
  providers: [CalculatorService, HeroesService, ApodService, CountriesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng18';
  active = 'countries';

}
