import { Component, inject } from '@angular/core';
import { ProjectsService } from '../data/projects.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent {
  readonly projectsService = inject(ProjectsService);
}
