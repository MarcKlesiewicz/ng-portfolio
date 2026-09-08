import { TestBed } from '@angular/core/testing';
import { PORTFOLIO_CONTENT_DATA } from '../../content/local/portfolio-content.data';
import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsService);
  });

  it('filters content summaries with category and technology AND semantics', () => {
    const filtered = service.filterSummaries(PORTFOLIO_CONTENT_DATA.projects, 'WORK', ['firebase', 'figma']);
    expect(filtered.map((project) => project.slug)).toEqual(['myepi']);
  });

  it('returns all summaries when no filters are active', () => {
    expect(service.filterSummaries(PORTFOLIO_CONTENT_DATA.projects, 'ALL')).toEqual(PORTFOLIO_CONTENT_DATA.projects);
  });
});
