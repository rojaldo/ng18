import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesComponent } from './countries.component';
import { UpperCasePipe, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CountryFilterPipe } from '../../../pipes/country-filter.pipe';
import { CountryOrderPipe } from '../../../pipes/country-order.pipe';
import { CountriesService } from '../../../services/countries.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CountriesComponent', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesComponent, UpperCasePipe, CountryOrderPipe, AsyncPipe, MatButtonToggleModule, FormsModule, MatFormFieldModule, MatInputModule, CountryFilterPipe, BrowserAnimationsModule],
      providers: [CountriesService, HttpClient, HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
