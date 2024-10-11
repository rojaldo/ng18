import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../models/country';
import { map, Observable } from 'rxjs';

@Pipe({
  name: 'countryOrder',
  standalone: true
})
export class CountryOrderPipe implements PipeTransform {

  transform(value: Observable<Country[]> | null, order: string , asc: boolean): Observable<Country[]> {

    console.log('CountryOrderPipe.transform()');
    

    if (!value) {
      return new Observable<Country[]>();
    }
    
    let result: Observable<Country[]> = new Observable<Country[]>();
    switch (order) {
      case 'name':
        result = value.pipe( map(countries => countries.sort((a, b) => a.name.localeCompare(b.name))));
        break;
      case 'capital':
        result = value.pipe( map(countries => countries.sort((a, b) => {
          if (a.capital === undefined || b.capital === undefined) {
            return 0;
          }
          return a.capital.localeCompare(b.capital);
        }
        )));
        break;
      case 'population':
        result = value.pipe( map(countries => countries.sort((a, b) => a.population - b.population)));
        break;
      case 'area':
        result = value.pipe( map(countries => countries.sort((a, b) => a.area - b.area)));
        break;
      default:
        console.log('Invalid order: ' + order);
        
    }

    asc === false ? result = result.pipe( map(countries => countries.reverse())) : null;
    
    return result;
  }

}
