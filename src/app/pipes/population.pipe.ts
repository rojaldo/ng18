import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'population',
  standalone: true
})
export class PopulationPipe implements PipeTransform {

  transform(population: number, ...args: unknown[]): string {
    // check if population is negative or decimal
    if (population < 0 || population % 1 !== 0) {
      console.error('Invalid population: ' + population);
      return 'N/A';
    } else if (population < 100000) {
      // return population as is with format xxx.xxx
      return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return (population / 1000000).toFixed(1) + 'M';
  }

}
