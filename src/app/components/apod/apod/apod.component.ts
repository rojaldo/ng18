import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../../services/apod.service';
import { JsonPipe } from '@angular/common';
import { Apod } from '../../../models/apod';
import { NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-apod',
  standalone: true,
  imports: [NgbDatepickerModule, FormsModule, JsonPipe, YouTubePlayer],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.scss'
})
export class ApodComponent implements OnInit {

  apod: Apod = new Apod();
  date: NgbDateStruct = { year: 2021, month: 6, day: 1 };

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

  handleDateChange() {
    // get date from this.date and convert to string in the format 'YYYY-MM-DD'
    console.log('Date changed: ', this.date);
    
    let dateStr = `${this.date.year}-${this.date.month}-${this.date.day}`;
    console.log('Date string: ', dateStr);
    
    this.service.getApod(dateStr);
  }

}


