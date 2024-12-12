import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, inject, OnInit } from '@angular/core';
import { ProjectsService } from '@app/work/data/projects.service';
import { ProjectType } from '@app/work/models/project.model';

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
  projectTypesFilter = [
    { type: 'ALL' as ProjectType, icon: '', label: 'ALL' },
    { type: 'WORK' as ProjectType, icon: 'work', label: 'WORK' },
    { type: 'SIDE QUESTS' as ProjectType, icon: 'explore', label: 'SIDE QUESTS' },
  ];

  selectedProjectType: ProjectType = 'ALL';
  isFilterListOpen = false;

  private readonly projectService: ProjectsService = inject(ProjectsService);

  toggleFilterList() {
    this.isFilterListOpen = !this.isFilterListOpen;
  }

  onFilterByProjectTypeSelected(projectType: ProjectType) {
    this.selectedProjectType = projectType;
    this.projectService.filterProjects(this.selectedProjectType);
  }
}
