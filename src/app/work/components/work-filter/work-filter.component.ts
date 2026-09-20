import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-work-filter',
  templateUrl: './work-filter.component.html',
  styleUrl: './work-filter.component.scss',
})
export class WorkFilterComponent {
  readonly isFilterListOpen = signal(false);
  readonly technologies = input<readonly string[]>([]);

  toggleFilterList() {
    this.isFilterListOpen.update((isOpen) => !isOpen);
  }
}
