import { Component, OnInit } from '@angular/core';
import { ApodService } from '../../../services/apod.service';
import { JsonPipe } from '@angular/common';
import { Apod } from '../../../models/apod';
import { NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { YouTubePlayer } from '@angular/youtube-player';
import { ApodPickerComponent } from "../apod-picker/apod-picker.component";
import { ApodInfoComponent } from "../apod-info/apod-info.component";

@Component({
  selector: 'app-apod',
  standalone: true,
  imports: [NgbDatepickerModule, FormsModule, JsonPipe, YouTubePlayer, ApodPickerComponent, ApodInfoComponent],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.scss'
})
export class ApodComponent {

  // today date in the format 'YYYY-MM-DD'
  date: string = new Date().toISOString().slice(0, 10);


  constructor() {
  }

  onDateChange(dateStr: string) {
    this.date = dateStr;
  }



}


