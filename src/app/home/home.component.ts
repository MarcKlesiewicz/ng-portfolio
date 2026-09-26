import { Component } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [HeroSectionComponent],
})
export class HomeComponent {}
