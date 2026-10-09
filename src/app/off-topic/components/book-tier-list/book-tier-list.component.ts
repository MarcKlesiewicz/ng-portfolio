import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface BookTierItem {
  title: string;
  author?: string;
  coverUrl?: string;
}

export interface BookTier {
  label: 'S' | 'A' | 'B' | 'C' | 'D' | 'F';
  books: BookTierItem[];
}

@Component({
  selector: 'app-book-tier-list',
  templateUrl: './book-tier-list.component.html',
  styleUrl: './book-tier-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookTierListComponent {
  readonly tiers = input.required<BookTier[]>();
}
