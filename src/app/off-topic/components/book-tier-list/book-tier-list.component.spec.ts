import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { BookTier, BookTierListComponent } from './book-tier-list.component';

const TEST_TIERS: BookTier[] = [
  { label: 'S', books: [{ title: 'S-tier book' }] },
  { label: 'A', books: [] },
  { label: 'B', books: [] },
  { label: 'C', books: [] },
  { label: 'D', books: [] },
  { label: 'F', books: [] },
];

describe('BookTierListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookTierListComponent],
    }).compileComponents();
  });

  it('renders every tier in ranking order with book-shaped placeholders', () => {
    const fixture = TestBed.createComponent(BookTierListComponent);
    fixture.componentRef.setInput('tiers', TEST_TIERS);
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const labels = Array.from(element.querySelectorAll('.tier-label'), (label) => label.textContent?.trim());
    const books = element.querySelectorAll('.book-card');

    expect(labels).toEqual(['S', 'A', 'B', 'C', 'D', 'F']);
    expect(books.length).toBeGreaterThan(0);
    expect(element.querySelector('[aria-label="Book tier list"]')).not.toBeNull();
  });
});
