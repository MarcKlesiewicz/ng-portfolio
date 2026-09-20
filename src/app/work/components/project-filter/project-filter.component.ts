import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

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
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class ProjectFilterComponent {
  readonly isFilterListOpen = signal(false);

  toggleFilterList() {
    this.isFilterListOpen.update((isOpen) => !isOpen);
  }
}
