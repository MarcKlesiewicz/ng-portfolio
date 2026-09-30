import { Component } from '@angular/core';
import { OrbitMarkComponent } from '@app/shared/components/orbit-mark/orbit-mark.component';
import { PageMastheadComponent } from '@app/shared/components/page-masthead/page-masthead.component';
import { PortfolioIndexComponent } from '@app/shared/components/portfolio-index/portfolio-index.component';
import { WorkCardComponent } from '../components/work-card/work-card.component';
import { WORK_ITEMS } from '../data/work-items';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrl: './work-page.component.scss',
  imports: [PageMastheadComponent, OrbitMarkComponent, PortfolioIndexComponent, WorkCardComponent],
})
export class WorkPageComponent {
  readonly workItems = WORK_ITEMS;
}
