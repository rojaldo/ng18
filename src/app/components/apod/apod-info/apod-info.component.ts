import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApodService } from '../../../services/apod.service';
import { Apod } from '../../../models/apod';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-apod-info',
  standalone: true,
  imports: [YouTubePlayer],
  templateUrl: './apod-info.component.html',
  styleUrl: './apod-info.component.scss'
})
export class ApodInfoComponent implements OnInit, OnChanges {

  // today date in the format 'YYYY-MM-DD'
  @Input() dateStr: string = new Date().toISOString().slice(0, 10);

  apod = new Apod();

  constructor(private service: ApodService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes detected:', changes);
    this.service.getApod(this.dateStr);
    
  }


  ngOnInit(): void {
    console.log('OnInit');
    
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
