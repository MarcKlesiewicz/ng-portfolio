import { Component, input } from '@angular/core';
import { Project } from '@app/work/models/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  readonly project = input<Project>();
}
