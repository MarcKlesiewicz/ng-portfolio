import type { BookTier, BookTierItem } from '../components/book-tier-list/book-tier-list.component';
import { BOOKS_2026_FILES } from './books-2026.generated';

const TIER_LABELS: BookTier['label'][] = ['S', 'A', 'B', 'C', 'D', 'F'];
const BOOK_FILE_PATTERN = /^([sabcdf])_(\d+)\.(?:avif|jpe?g|png|webp)$/i;
const BOOK_ASSET_DIRECTORY = '/assets/images/books_2026';

interface ParsedBookFile {
  tier: BookTier['label'];
  sequence: number;
  book: BookTierItem;
}

export function buildBookTiers(files: readonly string[]): BookTier[] {
  const parsedBooks = files.flatMap(parseBookFile).sort((left, right) => left.sequence - right.sequence);

  return TIER_LABELS.map((label) => ({
    label,
    books: parsedBooks.filter(({ tier }) => tier === label).map(({ book }) => book),
  }));
}

function parseBookFile(fileName: string): ParsedBookFile[] {
  const match = BOOK_FILE_PATTERN.exec(fileName);

  if (!match) {
    return [];
  }

  const [, tierPrefix, sequenceText] = match;
  const sequence = Number(sequenceText);

  return [
    {
      tier: tierPrefix.toUpperCase() as BookTier['label'],
      sequence,
      book: {
        title: `Book ${sequenceText}`,
        coverUrl: `${BOOK_ASSET_DIRECTORY}/${encodeURIComponent(fileName)}`,
      },
    },
  ];
}

export const BOOKS_2026_TIERS = buildBookTiers(BOOKS_2026_FILES);
