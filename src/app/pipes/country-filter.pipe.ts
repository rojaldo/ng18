import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../models/country';

@Pipe({
  name: 'countryFilter',
  standalone: true
})
export class CountryFilterPipe implements PipeTransform {

  transform(value: Country[] | null, nameFilter: string): Country[] {
    console.log('CountryFilterPipe.transform()');
    
    if (!value) {
      return [];
    }
    
    if (!nameFilter) {
      return value;
    }
    
    return value.filter(country => country.name.toLowerCase().includes(nameFilter.toLowerCase()));
  }

}
