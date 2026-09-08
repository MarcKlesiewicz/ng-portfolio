import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, convertToParamMap } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { providePortfolioContent } from '../../content/portfolio-content.providers';
import { ProjectResolution, projectResolver } from './project.resolver';

describe('projectResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers: [providePortfolioContent()] }));
  it('distinguishes a resolved story from a missing slug', async () => {
    const resolve = (slug: string) =>
      TestBed.runInInjectionContext(() =>
        projectResolver({ paramMap: convertToParamMap({ slug }) } as ActivatedRouteSnapshot, {} as never)
      ) as Observable<ProjectResolution>;
    expect((await firstValueFrom(resolve('monto'))).status).toBe('ready');
    expect((await firstValueFrom(resolve('missing'))).status).toBe('not-found');
  });
});
