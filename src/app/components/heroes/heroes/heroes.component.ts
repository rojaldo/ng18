import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {

  heroes = [ 'Windstorm', 'Bombasto', 'Magneta', 'Tornado' ];
  heroName = '';

  addHero() {

    this.heroes.push(this.heroName);
    this.heroName = '';
  }

}
