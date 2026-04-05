import { Component, inject } from '@angular/core';
import { ProjectsService } from '../data/projects.service';
import { ProjectFilterComponent } from '../components/project-filter/project-filter.component';
import { ProjectCardComponent } from '../components/project-card/project-card.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
  imports: [ProjectFilterComponent, ProjectCardComponent, AsyncPipe],
})
export class ProjectPageComponent {
  readonly projectsService = inject(ProjectsService);
}
