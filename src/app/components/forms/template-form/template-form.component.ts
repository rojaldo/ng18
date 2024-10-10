import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../../models/hero';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {

  model = new Hero('', '');
  submitted = false;

  readonly namePattern = '^[a-zA-Z ]*$';

  onSubmit() { 
    this.submitted = true; 
    console.log(JSON.stringify(this.model) + ' submitted');
    
  }

  newHero() {
    this.model = new Hero('', '');
  }

}
