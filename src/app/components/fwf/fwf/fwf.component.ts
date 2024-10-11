import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../../services/countries.service';
import { GameCard } from '../../../models/gamecard';

@Component({
  selector: 'app-fwf',
  standalone: true,
  imports: [],
  templateUrl: './fwf.component.html',
  styleUrl: './fwf.component.scss'
})
export class FwfComponent implements OnInit {

  gameCountries: GameCard[] = [];

  constructor(private service: CountriesService) {
    
  }

  ngOnInit(): void {
    this.service.getGameCountries();
    this.service.gameCountries$.subscribe(
      gameCountries => {
        this.gameCountries = gameCountries;
        console.log(this.gameCountries);
        
      }
    );
  }

}
