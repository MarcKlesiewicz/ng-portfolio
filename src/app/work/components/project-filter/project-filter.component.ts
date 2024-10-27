import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project-filter',
  templateUrl: './project-filter.component.html',
  styleUrl: './project-filter.component.scss',
  animations: [
    trigger('slideInOut', [
      state('out', style({ height: '*', opacity: 1 })),
      state('in', style({ height: '0px', opacity: 0 })),
      transition('in <=> out', animate('300ms ease-in-out')),
    ]),
  ],
})
export class ProjectFilterComponent {
  isFilterListOpen = false;

  toggleFilterList() {
    this.isFilterListOpen = !this.isFilterListOpen;
  }
}
