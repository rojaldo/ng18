import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../../services/apod.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-apod',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.scss'
})
export class ApodComponent implements OnInit {

  data: any = {};

  constructor(private service: ApodService) {
  }

  ngOnInit(): void {
    this.service.getApod();
    const observer = {
      next: (data: any) => {
        this.data = data;
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {
        console.log('Completed');
      }
    }
    this.service.data$.subscribe(observer);
  }

}
