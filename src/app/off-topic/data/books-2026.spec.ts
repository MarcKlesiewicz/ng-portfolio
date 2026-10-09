import { describe, expect, it } from 'vitest';

import { buildBookTiers } from './books-2026';

describe('buildBookTiers', () => {
  it('maps supported filenames to their tier and sorts them by sequence', () => {
    const tiers = buildBookTiers(['b_02.jpg', 's_01.jpg', 'b_01.jpg']);

    expect(tiers.find((tier) => tier.label === 'S')?.books).toEqual([
      {
        title: 'Book 01',
        coverUrl: '/assets/images/books_2026/s_01.jpg',
      },
    ]);
    expect(tiers.find((tier) => tier.label === 'B')?.books).toEqual([
      {
        title: 'Book 01',
        coverUrl: '/assets/images/books_2026/b_01.jpg',
      },
      {
        title: 'Book 02',
        coverUrl: '/assets/images/books_2026/b_02.jpg',
      },
    ]);
  });

  it('keeps every tier row and ignores files outside the naming convention', () => {
    const tiers = buildBookTiers(['notes.txt', 'x_01.jpg', 'a_cover.jpg']);

    expect(tiers.map((tier) => tier.label)).toEqual(['S', 'A', 'B', 'C', 'D', 'F']);
    expect(tiers.every((tier) => tier.books.length === 0)).toBe(true);
  });
});
