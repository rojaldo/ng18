import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/country';
import { BehaviorSubject } from 'rxjs';
import { GameCard } from '../models/gamecard';

@Injectable()
export class CountriesService {

  private _countries: Country[] = [];
  countries$ = new BehaviorSubject<Country[]>(this._countries);

  private _gameCountries: GameCard[] = [];
  gameCountries$ = new BehaviorSubject<GameCard[]>([]);

  constructor(private http: HttpClient) { }

  getCountries() {
    const observer = {
      next: (data: any) => {
        this._countries = data.map((country: any) => new Country(country));
        this.countries$.next(this._countries);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
      }
    };
    if (this._countries.length > 0) {
      this.countries$.next(this._countries);
      return;
    }
    this.http.get('https://restcountries.com/v3.1/all').subscribe(observer);
  }

  getGameCountries(num?: number) {
    if (this._countries.length == 0) {
      this.getCountries();
      this.countries$.subscribe(
        countries => {
          this._getgameCountries(num)
        }
      )
      
    }else {
      this._getgameCountries(num);
    }
  }

  _getgameCountries(num?: number) {
    if (!num) {
      num = 6;
    }
    this._gameCountries = [];
    for (let i = 0; i < num; i++) {
      const index = Math.floor(Math.random() * this._countries.length);
      // 3 random index countries
      const wronCountry1: Country = this._countries[Math.floor(Math.random() * this._countries.length)]
      const wronCountry2: Country = this._countries[Math.floor(Math.random() * this._countries.length)]
      const wronCountry3: Country = this._countries[Math.floor(Math.random() * this._countries.length)]

      this._gameCountries.push(new GameCard(this._countries[index].flag, this._countries[index].name, [wronCountry1.name, wronCountry2.name, wronCountry3.name]));
      this.gameCountries$.next(this._gameCountries);
    }
  }
}
