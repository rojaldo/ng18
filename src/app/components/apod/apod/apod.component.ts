import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../../services/apod.service';
import { JsonPipe } from '@angular/common';
import { Apod } from '../../../models/apod';

@Component({
  selector: 'app-apod',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.scss'
})
export class ApodComponent implements OnInit {

  apod: Apod = new Apod();

  constructor(private service: ApodService) {
  }

  ngOnInit(): void {
    this.service.getApod();
    const observer = {
      next: (data: Apod) => {
        this.apod = data;
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {
        console.log('Completed');
      }
    }
    this.service.apod$.subscribe(observer);
  }

}


