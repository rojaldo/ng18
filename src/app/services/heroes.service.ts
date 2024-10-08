import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable()
export class HeroesService {


  private _heroes: Hero[] = [ new Hero('Superman', 'Man of Steel'), new Hero('Batman', 'The Dark Knight') ];

  constructor() { }

  get heroes(): Hero[] {
    return this._heroes;
  }

  addHero(hero: Hero) {

    //check if hero name is already in the list
    if (this.heroes.find(myHero => myHero.name.toLocaleLowerCase() === hero.name.toLocaleLowerCase())) {
      throw new Error('Hero name is already in the list');
    }

    this.heroes.push(hero);
  }

  deleteHero(index: number) {
    this.heroes.splice(index, 1);
  }
}
