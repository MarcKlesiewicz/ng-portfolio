import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PORTFOLIO_PAGES, PortfolioPageId } from '../../data/portfolio-pages';

@Component({
  selector: 'app-page-masthead',
  templateUrl: './page-masthead.component.html',
  styleUrl: './page-masthead.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class PageMastheadComponent {
  readonly page = input.required<PortfolioPageId>();
  readonly pageDetails = computed(() => PORTFOLIO_PAGES.find(({ id }) => id === this.page())!);
}
