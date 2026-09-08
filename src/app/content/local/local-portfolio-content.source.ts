import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProjectStory, ProjectSummary } from '../models/portfolio-content.model';
import { PortfolioContentSource } from '../portfolio-content.source';
import { validatePortfolioContent } from '../portfolio-content.validators';
import { PORTFOLIO_CONTENT_DATA } from './portfolio-content.data';

@Injectable()
export class LocalPortfolioContentSource implements PortfolioContentSource {
  readonly projectSummaries$ = of(this.toSummaries(PORTFOLIO_CONTENT_DATA.projects));
  readonly featuredProjects$ = of(
    this.toSummaries(PORTFOLIO_CONTENT_DATA.projects)
      .filter((project) => project.featuredOrder !== undefined)
      .sort((a, b) => (a.featuredOrder ?? 0) - (b.featuredOrder ?? 0))
  );
  readonly profile$ = of(PORTFOLIO_CONTENT_DATA.profile);
  readonly technologies$ = of(PORTFOLIO_CONTENT_DATA.technologies);

  constructor() {
    validatePortfolioContent(PORTFOLIO_CONTENT_DATA);
  }

  getProjectBySlug(slug: string): Observable<ProjectStory | undefined> {
    return of(PORTFOLIO_CONTENT_DATA.projects.find((project) => project.slug === slug));
  }

  getProjectByLegacyId(id: string | null): Observable<ProjectStory | undefined> {
    return of(PORTFOLIO_CONTENT_DATA.projects.find((project) => project.legacyId === id));
  }

  private toSummaries(projects: readonly ProjectStory[]): readonly ProjectSummary[] {
    return projects.map(({ blocks: _blocks, contribution: _contribution, outcome: _outcome, ...summary }) => summary);
  }
}
