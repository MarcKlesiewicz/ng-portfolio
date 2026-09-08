import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectType, Technology } from '../../../content/models/portfolio-content.model';

@Component({
  selector: 'app-project-filter',
  templateUrl: './project-filter.component.html',
  styleUrl: './project-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectFilterComponent {
  @Input() projectType: ProjectType = 'ALL';
  @Input() selectedTechnologies: readonly string[] = [];
  @Input() technologies: readonly Technology[] = [];
  @Output() projectTypeChange = new EventEmitter<ProjectType>();
  @Output() technologyToggle = new EventEmitter<string>();
  @Output() clearFilters = new EventEmitter<void>();
  readonly projectTypes: readonly { value: ProjectType; label: string }[] = [
    { value: 'ALL', label: 'All work' },
    { value: 'WORK', label: 'Client work' },
    { value: 'SIDE QUESTS', label: 'Side quests' },
  ];
  isSelected(id: string): boolean {
    return this.selectedTechnologies.includes(id);
  }
}
