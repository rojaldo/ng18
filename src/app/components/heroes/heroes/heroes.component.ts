import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../../models/hero';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, NgbAlertModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {

  heroes: Hero[] = [ new Hero('Superman', 'Man of Steel'), new Hero('Batman', 'The Dark Knight') ];
  heroName = '';
  heroDescription = '';
  showErrorMessage = false;
  errorMessage = 'Hero name is already in the list';

  addHero() {

    //check if hero name is already in the list
    if (this.heroes.find(hero => hero.name.toLocaleLowerCase() === this.heroName.toLocaleLowerCase())) {
      this.showErrorMessage = true;
      return;
    }

    this.heroes.push(new Hero(this.heroName, this.heroDescription));
    this.heroName = '';
    this.heroDescription = '';
    this.showErrorMessage = false;
  }

  closeAlert() {
		this.showErrorMessage = false;
	}

}
