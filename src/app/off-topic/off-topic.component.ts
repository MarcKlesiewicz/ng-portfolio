import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OrbitMarkComponent } from '@app/shared/components/orbit-mark/orbit-mark.component';
import { PageMastheadComponent } from '@app/shared/components/page-masthead/page-masthead.component';
import { PortfolioIndexComponent } from '@app/shared/components/portfolio-index/portfolio-index.component';

@Component({
  selector: 'app-off-topic',
  templateUrl: './off-topic.component.html',
  styleUrl: './off-topic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageMastheadComponent, OrbitMarkComponent, PortfolioIndexComponent],
})
export class OffTopicComponent {}
