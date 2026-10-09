import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OrbitMarkComponent } from '@app/shared/components/orbit-mark/orbit-mark.component';
import { PageMastheadComponent } from '@app/shared/components/page-masthead/page-masthead.component';
import { PortfolioIndexComponent } from '@app/shared/components/portfolio-index/portfolio-index.component';
import { BookTierListComponent } from './components/book-tier-list/book-tier-list.component';
import { BOOKS_2026_TIERS } from './data/books-2026';

@Component({
  selector: 'app-off-topic',
  templateUrl: './off-topic.component.html',
  styleUrl: './off-topic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageMastheadComponent, OrbitMarkComponent, PortfolioIndexComponent, BookTierListComponent],
})
export class OffTopicComponent {
  readonly bookTiers = BOOKS_2026_TIERS;
}
