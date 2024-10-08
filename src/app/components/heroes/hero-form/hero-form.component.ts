import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../../models/hero';

@Component({
  selector: 'app-hero-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.scss'
})
export class HeroFormComponent {

  @Output() onAddHero = new EventEmitter<Hero>();

  @Input() newHero: Hero = new Hero('');

  addHero() {
    
    this.onAddHero.emit(this.newHero);
  }

}
