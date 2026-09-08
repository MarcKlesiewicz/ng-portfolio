import { Routes, UrlMatchResult, UrlSegment } from '@angular/router';
import { legacyProjectRedirectGuard, projectResolver } from './data/project.resolver';
import { ProjectDetailPageComponent } from './project-detail-page/project-detail-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';

export const WORK_ROUTES: Routes = [
  {
    path: '',
    component: ProjectPageComponent,
    title: 'klesiewicz.dev | projects',
  },

  {
    path: 'not-found',
    component: ProjectDetailPageComponent,
    data: { project: { status: 'not-found' } },
    title: 'Project not found | Marc Klesiewicz',
  },
  {
    path: 'content-error',
    component: ProjectDetailPageComponent,
    data: { project: { status: 'error' } },
    title: 'Project unavailable | Marc Klesiewicz',
  },
  { matcher: legacyProjectMatcher, canActivate: [legacyProjectRedirectGuard], component: ProjectDetailPageComponent },
  {
    path: ':slug',
    component: ProjectDetailPageComponent,
    resolve: { project: projectResolver },
    title: 'Project | Marc Klesiewicz',
  },
];

export function legacyProjectMatcher(segments: UrlSegment[]): UrlMatchResult | null {
  return segments.length === 1 && /^\d+$/.test(segments[0].path)
    ? { consumed: segments, posParams: { legacyId: segments[0] } }
    : null;
}
