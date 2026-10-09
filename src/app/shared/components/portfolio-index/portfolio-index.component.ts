import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PORTFOLIO_PAGES, PortfolioPageId } from '../../data/portfolio-pages';

@Component({
  selector: 'app-portfolio-index',
  templateUrl: './portfolio-index.component.html',
  styleUrls: ['./portfolio-index.component.scss'],
  imports: [RouterLink],
})
export class PortfolioIndexComponent {
  readonly current = input<PortfolioPageId | ''>('');
  readonly showContact = input(false);
  readonly pages = PORTFOLIO_PAGES;
}
