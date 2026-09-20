import { Component } from '@angular/core';
import { PROJECTS } from '../data/projects';
import { ProjectFilterComponent } from '../components/project-filter/project-filter.component';
import { ProjectCardComponent } from '../components/project-card/project-card.component';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
  imports: [ProjectFilterComponent, ProjectCardComponent],
})
export class ProjectPageComponent {
  readonly projects = PROJECTS;
}
