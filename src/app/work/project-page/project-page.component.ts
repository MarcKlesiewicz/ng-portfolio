import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectCardComponent } from '../components/project-card/project-card.component';
import { ProjectFilterComponent } from '../components/project-filter/project-filter.component';
import { ProjectsService } from '../data/projects.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
  imports: [ProjectFilterComponent, ProjectCardComponent, AsyncPipe],
})
export class ProjectPageComponent {
  readonly projectsService = inject(ProjectsService);
}
