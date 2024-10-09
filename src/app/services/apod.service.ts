import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Apod } from '../models/apod';

@Injectable()
export class ApodService {

  private _apod: Apod = new Apod();
  apod$ = new BehaviorSubject<Apod>(this._apod);

  constructor(private _http: HttpClient) { }

  getApod(dateStr?: string) {

    const baseURL = 'https://api.nasa.gov/planetary/apod';
    const apiKey = 'tqz634Z1x0LiJzjbhSyUoExrZaGKLM0MG1VnROR6';
    let url = `${baseURL}?api_key=${apiKey}`;
    dateStr ? url += `&date=${dateStr}` : null;
    
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
      }
    };

    this._http.get(url).subscribe(observer);
  } 
}
