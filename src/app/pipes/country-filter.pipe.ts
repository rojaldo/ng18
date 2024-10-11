import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../models/country';
import { map, Observable } from 'rxjs';

@Pipe({
  name: 'countryFilter',
  standalone: true
})
export class CountryFilterPipe implements PipeTransform {

  transform(value: Observable<Country[]> | null, nameFilter: string): Observable<Country[]> {
    console.log('CountryFilterPipe.transform()');
    
    if (!value) {
      return new Observable<Country[]>();
    }
    
    if (!nameFilter) {
      return value;
    }
    
    return value.pipe( map(countries => countries.filter(country => country.name.toLowerCase().includes(nameFilter.toLowerCase()))));
  }

}
