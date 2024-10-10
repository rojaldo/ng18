import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

function validateHero(control: AbstractControl) {
  const name = control.value;
  const valid = name && name.startsWith('hero');
  return valid ? null : { invalidHero: true };
}

const spanishNamePattern = '^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{3,10}$';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  profileForm: any;

  //define a regex to validate a name between 3 and 10 characters using letters of spanish alphabet


constructor(private fb: FormBuilder) { 

  this.profileForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(spanishNamePattern), validateHero]],
    description: [''],

});
}

updateProfile() {
  this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
          street: '123 Drew Street'
      }
  });
}


onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm.value);
}


}
