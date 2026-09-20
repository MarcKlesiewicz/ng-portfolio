import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ProjectsService } from '../data/projects.service';
import { ProjectFilterComponent } from '../components/project-filter/project-filter.component';
import { ProjectCardComponent } from '../components/project-card/project-card.component';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ProjectFilterComponent, ProjectCardComponent],
})
export class ProjectPageComponent {
  readonly projectsService = inject(ProjectsService);
}
