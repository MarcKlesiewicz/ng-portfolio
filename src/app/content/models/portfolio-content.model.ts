export type ProjectType = 'ALL' | 'WORK' | 'SIDE QUESTS';
export type ProjectCategory = Exclude<ProjectType, 'ALL'>;

export interface MediaAsset {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  readonly caption?: string;
}

export interface Technology {
  readonly id: string;
  readonly label: string;
  readonly icon: string;
  readonly group: 'frontend' | 'language' | 'ui' | 'backend' | 'delivery' | 'tooling';
}

export interface ProjectSummary {
  readonly legacyId: string;
  readonly slug: string;
  readonly name: string;
  readonly description: string;
  readonly thumbnail: MediaAsset;
  readonly logo?: MediaAsset;
  readonly technologies: readonly string[];
  readonly projectType: ProjectCategory;
  readonly year: number;
  readonly featuredOrder?: number;
  readonly liveUrl?: string;
  readonly githubUrl?: string;
}

export type ProjectStoryBlock =
  | { readonly kind: 'heading'; readonly text: string; readonly level: 2 | 3 }
  | { readonly kind: 'paragraph'; readonly text: string }
  | { readonly kind: 'list'; readonly style: 'ordered' | 'unordered'; readonly items: readonly string[] }
  | { readonly kind: 'media'; readonly media: MediaAsset }
  | { readonly kind: 'callout'; readonly title: string; readonly text: string }
  | { readonly kind: 'links'; readonly links: readonly ContentLink[] };

export interface ContentLink {
  readonly label: string;
  readonly url: string;
}

export interface ProjectStory extends ProjectSummary {
  readonly contribution?: string;
  readonly outcome?: string;
  readonly blocks: readonly ProjectStoryBlock[];
}

export interface ExperienceItem {
  readonly organization: string;
  readonly role: string;
  readonly start: string;
  readonly end: string;
  readonly description: readonly string[];
  readonly logo?: MediaAsset;
}

export interface PortfolioProfile {
  readonly name: string;
  readonly role: string;
  readonly location: string;
  readonly introduction: readonly string[];
  readonly portrait: MediaAsset;
  readonly avatar?: MediaAsset;
  readonly endorsement?: { readonly quote: string; readonly attribution: string };
  readonly capabilityGroups: readonly {
    readonly title: string;
    readonly technologyIds: readonly string[];
  }[];
  readonly experience: readonly ExperienceItem[];
  readonly contacts: readonly ContentLink[];
}

export interface PortfolioContentSnapshot {
  readonly projects: readonly ProjectStory[];
  readonly profile: PortfolioProfile;
  readonly technologies: readonly Technology[];
}
