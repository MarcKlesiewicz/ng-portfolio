import { Routes } from '@angular/router';
import { AboutComponent } from './about.component';

export const ABOUT_ROUTES: Routes = [
  {
    path: '',
    component: AboutComponent,
    title: 'About Marc Klesiewicz — Developer and tinkerer',
    data: {
      description: 'The experience, capabilities, interests, and working perspective of developer Marc Klesiewicz.',
    },
  },
];
