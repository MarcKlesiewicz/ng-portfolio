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
    path: 'work',
    loadComponent: () => import('./work/work-page/work-page.component').then((module) => module.WorkPageComponent),
    title: 'klesiewicz.dev | work',
  },
  {
    path: 'work/:slug',
    loadComponent: () =>
      import('./work/work-detail-page/work-detail-page.component').then((module) => module.WorkDetailPageComponent),
    title: 'klesiewicz.dev | work',
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
