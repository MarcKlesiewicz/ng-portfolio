import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PORTFOLIO_CONTENT } from '../content/portfolio-content.source';
import { EditorialSectionComponent } from '../shared/components/editorial-section/editorial-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [AsyncPipe, RouterLink, HeroSectionComponent, EditorialSectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly content = inject(PORTFOLIO_CONTENT);
  readonly profile$ = this.content.profile$;
  readonly featuredProjects$ = this.content.featuredProjects$;
}
