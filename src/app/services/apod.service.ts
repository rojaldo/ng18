import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ApodService {

  private _data: any = {};
  data$ = new BehaviorSubject<any>(this._data);

  constructor(private _http: HttpClient) { }

  getApod() {
    const baseURL = 'https://api.nasa.gov/planetary/apod';
    const apiKey = 'DEMO_KEY';

    const observer = {
      next: (data: any) => {
        console.log(data);
        this._data = data;
        this.data$.next(this._data);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('Completed');
      }
    };
    this._http.get(`${baseURL}?api_key=${apiKey}`).subscribe(observer);
  } 
}
