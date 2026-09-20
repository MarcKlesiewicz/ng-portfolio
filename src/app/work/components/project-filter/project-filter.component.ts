import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-project-filter',
  templateUrl: './project-filter.component.html',
  styleUrl: './project-filter.component.scss',
})
export class ProjectFilterComponent {
  readonly isFilterListOpen = signal(false);

  toggleFilterList() {
    this.isFilterListOpen.update((isOpen) => !isOpen);
  }
}
