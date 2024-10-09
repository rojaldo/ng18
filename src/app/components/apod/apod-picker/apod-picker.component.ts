import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDate, NgbDatepicker, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ApodService } from '../../../services/apod.service';

@Component({
  selector: 'app-apod-picker',
  standalone: true,
  imports: [NgbDatepickerModule, FormsModule],
  templateUrl: './apod-picker.component.html',
  styleUrl: './apod-picker.component.scss'
})
export class ApodPickerComponent {

  date: NgbDateStruct = { year: 2021, month: 6, day: 1 };
  @Output() onDateChange = new EventEmitter<string>();

  constructor(private service: ApodService) {
  }

  handleDateChange() {
    // get date from this.date and convert to string in the format 'YYYY-MM-DD'
    this.onDateChange.emit(`${this.date.year}-${this.date.month}-${this.date.day}`);
  }
}
