import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then((module) => module.HomeComponent),
    title: 'klesiewicz.dev | home',
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then((module) => module.AboutComponent),
    title: 'klesiewicz.dev | about',
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./work/project-page/project-page.component').then((module) => module.ProjectPageComponent),
    title: 'klesiewicz.dev | work',
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
