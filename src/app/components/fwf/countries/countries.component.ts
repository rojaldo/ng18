import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../../services/countries.service';
import { Country } from '../../../models/country';
import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { CountryOrderPipe } from "../../../pipes/country-order.pipe";
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [UpperCasePipe, CountryOrderPipe, AsyncPipe],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent implements OnInit {

  countries: Country[] = [];
  countries$: BehaviorSubject<Country[]> = new BehaviorSubject<Country[]>([]);

  constructor(private service: CountriesService) {
  }

  ngOnInit() {
    this.countries$ = this.service.countries$;
    this.service.getCountries();
    this.service.countries$.subscribe(
      countries => {
        this.countries = [];
        this.countries = countries;
      }
    );

  }

}
