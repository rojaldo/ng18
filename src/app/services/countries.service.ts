import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/country';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CountriesService {

  private _countries: Country[] = [];
  countries$ = new BehaviorSubject<Country[]>(this._countries);

  constructor(private http: HttpClient) { }

  getCountries() {
    const observer = {
      next: (data: any) => {
        data.forEach((country: any) => {
          this._countries.push(new Country(country));
        });
        this.countries$.next(this._countries);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
      }
    };
    this.http.get('https://restcountries.com/v3.1/all').subscribe(observer);
  }
}
