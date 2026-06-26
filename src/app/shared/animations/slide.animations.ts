import { animate, state, style, transition, trigger } from '@angular/animations';

export const slideInOut = trigger('slideInOut', [
  state('in', style({ height: '*', opacity: 1 })),
  state('out', style({ height: '0px', opacity: 0 })),
  transition('in <=> out', animate('300ms ease-in-out')),
]);

export const slideDown = trigger('slideDown', [
  state(
    'open',
    style({
      height: '100vh',
      opacity: 1,
      'z-index': 10,
    })
  ),
  state(
    'closed',
    style({
      height: '0px',
      opacity: 0,
      'z-index': -1,
    })
  ),
  transition('closed => open', [animate('300ms ease-in')]),
  transition('open => closed', [animate('300ms ease-out')]),
]);
