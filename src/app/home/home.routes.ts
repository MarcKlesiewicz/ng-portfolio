import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Marc Klesiewicz — Frontend and app developer',
    data: { description: 'Selected frontend and app work by Marc Klesiewicz, based near Odense, Denmark.' },
  },
];
