import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio-index',
  templateUrl: './portfolio-index.component.html',
  styleUrls: ['./portfolio-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterLink],
})
export class PortfolioIndexComponent {
  readonly includeHome = input(false);
  readonly current = input<'about' | ''>('');
  readonly showContact = input(false);
}
