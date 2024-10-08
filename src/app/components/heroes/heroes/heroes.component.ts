import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../../models/hero';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, NgbAlertModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  heroName = '';
  heroDescription = '';
  showErrorMessage = false;
  errorMessage = 'Hero name is already in the list';

  constructor(private service: HeroesService) {
    
  }

  ngOnInit(): void {

    this.heroes = this.service.heroes;
    
  }

  addHero() {
    try {
      this.service.addHero(new Hero(this.heroName, this.heroDescription));
      this.heroName = '';
      this.heroDescription = '';
      this.showErrorMessage = false;
    }catch (e) {
      this.showErrorMessage = true;
    }
  }

  deleteHero(index: number) {
    this.service.deleteHero(index);
  }



  closeAlert() {
		this.showErrorMessage = false;
	}

}
