import { Component, Input } from '@angular/core';
import { Project } from '@app/work/models/project.model';
import { RouterLink } from '@angular/router';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  imports: [RouterLink, UpperCasePipe],
})
export class ProjectCardComponent {
  @Input() project?: Project;
}
