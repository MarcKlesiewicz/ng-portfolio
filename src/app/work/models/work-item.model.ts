export type WorkCategory = 'Client work' | 'Side quest';

export interface WorkMedia {
  readonly src: string;
  readonly alt: string;
}

export type WorkStoryBlock =
  | { readonly kind: 'heading'; readonly text: string }
  | { readonly kind: 'paragraph'; readonly text: string }
  | { readonly kind: 'features'; readonly items: readonly string[] }
  | { readonly kind: 'media'; readonly media: WorkMedia }
  | { readonly kind: 'callout'; readonly title: string; readonly text: string };

interface WorkItemBase {
  readonly id: string;
  readonly slug: string;
  readonly name: string;
  readonly description: string;
  readonly thumbnail: WorkMedia;
  readonly logo?: WorkMedia;
  readonly technologies: readonly string[];
  readonly category: WorkCategory;
  readonly year: number;
  readonly liveUrl?: string;
  readonly story: readonly WorkStoryBlock[];
}

type WorkFacts =
  | { readonly contribution: string; readonly outcome: string }
  | { readonly contribution?: never; readonly outcome?: never };

export type WorkItem = WorkItemBase & WorkFacts;
