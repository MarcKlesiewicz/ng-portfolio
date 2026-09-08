import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { PORTFOLIO_CONTENT } from '../../content/portfolio-content.source';
import { ProjectType } from '../../content/models/portfolio-content.model';
import { ProjectCardComponent } from '../components/project-card/project-card.component';
import { ProjectFilterComponent } from '../components/project-filter/project-filter.component';
import { ProjectsService } from '../data/projects.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
  imports: [ProjectFilterComponent, ProjectCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectPageComponent {
  private readonly content = inject(PORTFOLIO_CONTENT);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly projectsService = inject(ProjectsService);

  readonly projects = toSignal(this.content.projectSummaries$, { initialValue: [] });
  readonly technologies = toSignal(this.content.technologies$, { initialValue: [] });
  readonly queryParams = toSignal(this.route.queryParamMap, { initialValue: this.route.snapshot.queryParamMap });
  readonly announcement = signal('');
  readonly selectedProjectType = computed<ProjectType>(() => {
    const category = this.queryParams().get('category');
    return category === 'work' ? 'WORK' : category === 'side-quests' ? 'SIDE QUESTS' : 'ALL';
  });
  readonly selectedTechnologies = computed(() => {
    const knownIds = new Set(this.technologies().map((technology) => technology.id));
    return [...new Set((this.queryParams().get('tech') ?? '').split(',').filter((id) => knownIds.has(id)))];
  });
  readonly visibleProjects = computed(() =>
    this.projectsService.filterSummaries(this.projects(), this.selectedProjectType(), this.selectedTechnologies())
  );

  setProjectType(projectType: ProjectType): void {
    this.updateFilters(projectType, this.selectedTechnologies());
  }

  toggleTechnology(id: string): void {
    const selected = this.selectedTechnologies();
    this.updateFilters(
      this.selectedProjectType(),
      selected.includes(id) ? selected.filter((item) => item !== id) : [...selected, id]
    );
  }

  clearFilters(): void {
    this.updateFilters('ALL', []);
  }

  private updateFilters(projectType: ProjectType, technologies: readonly string[]): void {
    const category = projectType === 'WORK' ? 'work' : projectType === 'SIDE QUESTS' ? 'side-quests' : null;
    void this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: { category, tech: technologies.length ? technologies.join(',') : null },
        queryParamsHandling: 'merge',
      })
      .then(() => this.announcement.set(`${this.visibleProjects().length} projects shown`));
  }
}
