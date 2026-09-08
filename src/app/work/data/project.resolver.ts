import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, ResolveFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { ProjectStory } from '../../content/models/portfolio-content.model';
import { PORTFOLIO_CONTENT } from '../../content/portfolio-content.source';

export type ProjectResolution =
  | { readonly status: 'ready'; readonly project: ProjectStory }
  | { readonly status: 'not-found' }
  | { readonly status: 'error' };

export const projectResolver: ResolveFn<ProjectResolution> = (route) =>
  inject(PORTFOLIO_CONTENT)
    .getProjectBySlug(route.paramMap.get('slug') ?? '')
    .pipe(
      map((project): ProjectResolution => (project ? { status: 'ready', project } : { status: 'not-found' })),
      catchError(() => of({ status: 'error' } as const))
    );

export const legacyProjectRedirectGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const source = inject(PORTFOLIO_CONTENT);
  const router = inject(Router);
  return source.getProjectByLegacyId(route.paramMap.get('legacyId')).pipe(
    map((project) =>
      router.createUrlTree(project ? ['/projects', project.slug] : ['/projects', 'not-found'], {
        queryParams: route.queryParams,
      })
    ),
    catchError(() => of(router.createUrlTree(['/projects', 'content-error'], { queryParams: route.queryParams })))
  );
};
