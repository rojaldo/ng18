import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../../services/countries.service';
import { Country } from '../../../models/country';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent implements OnInit {

  countries: Country[] = [];

  constructor(private service: CountriesService) {
  }

  ngOnInit() {
    this.service.countries$.subscribe(
      countries => {
        this.countries = countries;
      }
    );
    this.service.getCountries();
  }

}
