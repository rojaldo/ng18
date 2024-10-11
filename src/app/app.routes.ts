import { Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { myGuard } from './guards/my.guard';

export const routes: Routes = [
    {path: 'calculator', component: CalculatorComponent},
    {path: 'heroes', loadComponent: () => import('./components/heroes/heroes/heroes.component').then(m => m.HeroesComponent), canActivate: [myGuard]},
    {path: 'apod', loadComponent: () => import('./components/apod/apod/apod.component').then(m => m.ApodComponent)},
    {path: 'countries', loadComponent: () => import('./components/fwf/countries/countries.component').then(m => m.CountriesComponent)},
    {path: 'template-form', loadComponent: () => import('./components/forms/template-form/template-form.component').then(m => m.TemplateFormComponent)},
    {path: 'reactive-form', loadComponent: () => import('./components/forms/reactive-form/reactive-form.component').then(m => m.ReactiveFormComponent)},
    {path: 'game', loadComponent: () => import('./components/fwf/fwf/fwf.component').then(m => m.FwfComponent)},
    {path: '', redirectTo: '/calculator', pathMatch: 'full'},
    {path: '**', redirectTo: '/calculator'}
];
