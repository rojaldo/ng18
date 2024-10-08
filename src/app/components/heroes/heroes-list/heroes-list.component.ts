import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../../models/hero';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.scss'
})
export class HeroesListComponent {

  @Input() heroesList: Hero[] = [];
  @Output() onDelete = new EventEmitter<number>();

  deleteHero(index: number) {
    // this.heroesList.splice(index, 1);
    this.onDelete.emit(index);
  }

}
