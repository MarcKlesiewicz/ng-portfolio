import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-index',
  templateUrl: './portfolio-index.component.html',
  styleUrls: ['./portfolio-index.component.scss'],
})
export class PortfolioIndexComponent {
  @Input() includeHome = false;
  @Input() current: 'about' | '' = '';
  @Input() showContact = false;
}
