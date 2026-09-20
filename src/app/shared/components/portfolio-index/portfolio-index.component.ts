import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio-index',
  templateUrl: './portfolio-index.component.html',
  styleUrls: ['./portfolio-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterLink],
})
export class PortfolioIndexComponent {
  @Input() includeHome = false;
  @Input() current: 'about' | '' = '';
  @Input() showContact = false;
}
