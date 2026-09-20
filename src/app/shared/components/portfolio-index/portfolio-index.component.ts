import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-portfolio-index',
  templateUrl: './portfolio-index.component.html',
  styleUrls: ['./portfolio-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PortfolioIndexComponent {
  @Input() includeHome = false;
  @Input() current: 'about' | '' = '';
  @Input() showContact = false;
}
