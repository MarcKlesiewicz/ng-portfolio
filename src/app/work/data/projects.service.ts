import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProjectSummary } from '../../content/models/portfolio-content.model';
import { PORTFOLIO_CONTENT, PortfolioContentSource } from '../../content/portfolio-content.source';
import { Project, ProjectTechnologies, ProjectType } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private readonly allProjects: Project[] = [];
  private readonly projectSubject = new BehaviorSubject<readonly Project[]>([]);

  readonly projects$: Observable<readonly Project[]> = this.projectSubject.asObservable();

  constructor(@Inject(PORTFOLIO_CONTENT) source: PortfolioContentSource) {
    source.projectSummaries$.subscribe((summaries) => {
      this.allProjects.splice(0, this.allProjects.length, ...summaries.map((summary) => this.toViewModel(summary)));
      this.projectSubject.next(this.allProjects);
    });
  }

  getProjectById(id: string | null): Project | undefined {
    return this.allProjects.find((project) => project.id === id);
  }

  filterProjects(projectType: ProjectType, technologies: ProjectTechnologies[] = []): void {
    let filteredProjects = this.allProjects;

    if (projectType !== 'ALL') {
      filteredProjects = filteredProjects.filter((project) => project.projectType === projectType);
    }

    if (technologies.length > 0) {
      filteredProjects = filteredProjects.filter((project) =>
        technologies.every((tech) => project.technologies.includes(this.normalizeTechnology(tech)))
      );
    }

    this.projectSubject.next(filteredProjects);
  }

  private normalizeTechnology(technology: string): string {
    return technology
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  private toViewModel(project: ProjectSummary): Project {
    const legacyContentName = project.slug === 'myepi' ? 'my-epi' : project.slug === 'up-n-down' ? 'und' : project.slug;
    return {
      id: project.legacyId,
      slug: project.slug,
      name: project.name,
      description: project.description,
      thumbnail: project.thumbnail.src,
      logo: project.logo?.src,
      technologies: [...project.technologies],
      liveUrl: project.liveUrl,
      githubUrl: project.githubUrl,
      projectType: project.projectType,
      contentPath: `assets/html/${legacyContentName}.html`,
      year: project.year,
    };
  }
}
