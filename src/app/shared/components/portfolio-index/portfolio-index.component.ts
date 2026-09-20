import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio-index',
  templateUrl: './portfolio-index.component.html',
  styleUrls: ['./portfolio-index.component.scss'],
  imports: [RouterLink],
})
export class PortfolioIndexComponent {
  readonly includeHome = input(false);
  readonly current = input<'about' | ''>('');
  readonly showContact = input(false);
}
