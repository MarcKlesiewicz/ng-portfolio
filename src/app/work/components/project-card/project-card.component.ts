import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectSummary, Technology } from '../../../content/models/portfolio-content.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: ProjectSummary;
  @Input() technologies: readonly Technology[] = [];
  technologyLabel(id: string): string {
    return this.technologies.find((item) => item.id === id)?.label ?? id;
  }
}
