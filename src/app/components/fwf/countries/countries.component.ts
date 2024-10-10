import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../../services/countries.service';
import { Country } from '../../../models/country';
import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { CountryOrderPipe } from "../../../pipes/country-order.pipe";
import { BehaviorSubject } from 'rxjs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CountryFilterPipe } from "../../../pipes/country-filter.pipe";

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [UpperCasePipe, CountryOrderPipe, AsyncPipe, MatButtonToggleModule, FormsModule, MatFormFieldModule, MatInputModule, CountryFilterPipe],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent implements OnInit {

  countries: Country[] = [];
  countries$: BehaviorSubject<Country[]> = new BehaviorSubject<Country[]>([]);

  order = 'name';
  asc = true;
  nameFilter = '';

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

  handleOrder(event: any) {
    this.order = event.value;
  }

  handleAsc(event: any) {
    this.asc = (event.value === 'asc');
  }

}
