import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioProfile, ProjectSummary, Technology } from '../../../content/models/portfolio-content.model';

@Component({
  selector: 'app-corporate-resume',
  templateUrl: './corporate-resume.component.html',
  styleUrl: './corporate-resume.component.scss',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CorporateResumeComponent {
  @Input({ required: true }) profile!: PortfolioProfile;
  @Input({ required: true }) technologies: readonly Technology[] = [];
  @Input({ required: true }) featuredProjects: readonly ProjectSummary[] = [];

  get visibleProjects(): readonly ProjectSummary[] {
    return this.featuredProjects.slice(0, 3);
  }

  technologyLabel(id: string): string {
    return this.technologies.find((technology) => technology.id === id)?.label ?? id;
  }
}
