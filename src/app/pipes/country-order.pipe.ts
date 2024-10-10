import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../models/country';

@Pipe({
  name: 'countryOrder',
  standalone: true
})
export class CountryOrderPipe implements PipeTransform {

  transform(value: Country[] | null, order: string , asc: boolean): Country[] {

    console.log('CountryOrderPipe.transform()');
    

    if (!value) {
      return [];
    }
    
    let result: Country[] = [];
    switch (order) {
      case 'name':
        result = value.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'capital':
        result = value.sort((a, b) => {
          if (a.capital === undefined || b.capital === undefined) {
            return 0;
          }
          return a.capital.localeCompare(b.capital)
        });
        break;
      case 'population':
        result = value.sort((a, b) => a.population - b.population);
        break;
      case 'area':
        result = value.sort((a, b) => a.area - b.area);
        break;
      default:
        console.log('Invalid order: ' + order);
        
    }

    asc === false && value.reverse();
    
    return result;
  }

}
