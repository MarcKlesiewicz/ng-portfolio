import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OrbitMarkComponent } from '@app/shared/components/orbit-mark/orbit-mark.component';
import { PortfolioIndexComponent } from '@app/shared/components/portfolio-index/portfolio-index.component';
import { WorkCardComponent } from '../components/work-card/work-card.component';
import { WORK_ITEMS } from '../data/work-items';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrl: './work-page.component.scss',
  imports: [RouterLink, OrbitMarkComponent, PortfolioIndexComponent, WorkCardComponent],
})
export class WorkPageComponent {
  readonly workItems = WORK_ITEMS;
}
