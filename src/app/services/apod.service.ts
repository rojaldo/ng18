import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Apod } from '../models/apod';

@Injectable()
export class ApodService {

  private _apod: Apod = new Apod();
  apod$ = new BehaviorSubject<Apod>(this._apod);

  constructor(private _http: HttpClient) { }

  getApod() {

    const baseURL = 'https://api.nasa.gov/planetary/apod';
    const apiKey = 'DEMO_KEY';
    let url = `${baseURL}?api_key=${apiKey}`;

    const observer = {
      next: (data: any) => {
        this._apod = new Apod(data);
        this.apod$.next(this._apod);
      },
      error: (error: any) => {
        console.log(error);
        this.apod$.error(error);
      },
      complete: () => {
        this.apod$.complete();
      }
    };

    this._http.get(url).subscribe(observer);
  } 
}
