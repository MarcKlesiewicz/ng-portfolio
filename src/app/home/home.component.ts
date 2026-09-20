import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [HeroSectionComponent],
})
export class HomeComponent {}
