import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../../models/hero';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesService } from '../../../services/heroes.service';
import { HeroesListComponent } from "../heroes-list/heroes-list.component";
import { HeroFormComponent } from "../hero-form/hero-form.component";

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, NgbAlertModule, HeroesListComponent, HeroFormComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  hero: Hero = new Hero('');
  showErrorMessage = false;
  errorMessage = 'Hero name is already in the list';

  constructor(private service: HeroesService) {
    
  }

  ngOnInit(): void {

    this.heroes = this.service.heroes;

  }

  addHero(hero: Hero) {
    try {
      
      this.service.addHero( new Hero(hero.name, hero.description));
      this.showErrorMessage = false;
      this.hero = new Hero('');
    }catch (e) {
      this.showErrorMessage = true;
    }
    this.heroes = this.service.heroes;
  }

  deleteHero(index: number) {
    this.service.deleteHero(index);
    this.heroes = this.service.heroes;
  }



  closeAlert() {
		this.showErrorMessage = false;
	}

}
