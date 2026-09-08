import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { providePortfolioContent } from '../../content/portfolio-content.providers';
import { PORTFOLIO_CONTENT_DATA } from '../../content/local/portfolio-content.data';
import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [providePortfolioContent()] });
    service = TestBed.inject(ProjectsService);
  });

  it('finds a known project and returns undefined for an unknown id', () => {
    expect(service.getProjectById('1')?.name).toBe('Monto');
    expect(service.getProjectById('missing')).toBeUndefined();
    expect(service.getProjectById(null)).toBeUndefined();
  });

  it('filters technologies using AND semantics', async () => {
    service.filterProjects('ALL', ['Firebase', 'Figma']);

    const projects = await firstValueFrom(service.projects$);
    expect(projects.map((project) => project.name)).toEqual(['MyEpi']);
  });

  it('restores the complete collection with ALL and no technologies', async () => {
    service.filterProjects('WORK', ['Firebase']);
    service.filterProjects('ALL');

    const projects = await firstValueFrom(service.projects$);
    expect(projects.length).toBe(5);
  });

  it('filters content summaries with category and technology AND semantics', () => {
    const filtered = service.filterSummaries(PORTFOLIO_CONTENT_DATA.projects, 'WORK', ['firebase', 'figma']);
    expect(filtered.map((project) => project.slug)).toEqual(['myepi']);
  });
});
