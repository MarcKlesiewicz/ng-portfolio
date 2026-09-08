import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioProfile, ProjectStory, ProjectSummary, Technology } from './models/portfolio-content.model';

export interface PortfolioContentSource {
  readonly projectSummaries$: Observable<readonly ProjectSummary[]>;
  readonly featuredProjects$: Observable<readonly ProjectSummary[]>;
  readonly profile$: Observable<PortfolioProfile>;
  readonly technologies$: Observable<readonly Technology[]>;

  getProjectBySlug(slug: string): Observable<ProjectStory | undefined>;
  getProjectByLegacyId(id: string | null): Observable<ProjectStory | undefined>;
}

export const PORTFOLIO_CONTENT = new InjectionToken<PortfolioContentSource>('PORTFOLIO_CONTENT');
