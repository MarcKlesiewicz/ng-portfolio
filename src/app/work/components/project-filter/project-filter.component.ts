import { Component, inject } from '@angular/core';
import { slideInOut } from '@app/shared/animations/slide.animations';
import { ProjectsService } from '@app/work/data/projects.service';
import { PROJECT_TECHNOLOGIES, ProjectTechnologies, ProjectType } from '@app/work/models/project.model';

@Component({
  selector: 'app-project-filter',
  templateUrl: './project-filter.component.html',
  styleUrl: './project-filter.component.scss',
  animations: [slideInOut],
})
export class ProjectFilterComponent {
  readonly projectTypesFilter = [
    { type: 'ALL' as ProjectType, icon: '', label: 'ALL' },
    { type: 'WORK' as ProjectType, icon: 'work', label: 'WORK' },
    { type: 'SIDE QUESTS' as ProjectType, icon: 'explore', label: 'SIDE QUESTS' },
  ];
  readonly technologies = PROJECT_TECHNOLOGIES;

  selectedProjectType: ProjectType = 'ALL';
  selectedTechnologies: ProjectTechnologies[] = [];
  isFilterListOpen = false;

  private readonly projectService: ProjectsService = inject(ProjectsService);

  toggleFilterList(): void {
    this.isFilterListOpen = !this.isFilterListOpen;
  }

  onFilterByProjectTypeSelected(projectType: ProjectType): void {
    this.selectedProjectType = projectType;
    this.filterProjects();
  }

  onTechnologySelected(technology: ProjectTechnologies): void {
    const index = this.selectedTechnologies.indexOf(technology);
    if (index === -1) {
      this.selectedTechnologies.push(technology);
    } else {
      this.selectedTechnologies.splice(index, 1);
    }
    this.filterProjects();
  }

  private filterProjects(): void {
    this.projectService.filterProjects(this.selectedProjectType, this.selectedTechnologies);
  }
}
