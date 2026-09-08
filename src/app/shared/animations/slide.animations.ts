import { animate, state, style, transition, trigger } from '@angular/animations';

export const slideInOut = trigger('slideInOut', [
  state('in', style({ height: '*', opacity: 1 })),
  state('out', style({ height: '0px', opacity: 0 })),
  transition('in <=> out', animate('300ms ease-in-out')),
]);
