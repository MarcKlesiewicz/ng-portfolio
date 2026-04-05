import { Routes } from '@angular/router';
import { ProjectDetailPageComponent } from './project-detail-page/project-detail-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';

export const WORK_ROUTES: Routes = [
  {
    path: '',
    component: ProjectPageComponent,
    title: 'klesiewicz.dev | projects',
  },

  {
    path: ':id',
    component: ProjectDetailPageComponent,
    title: 'klesiewicz.dev | project details',
  },
];
