import { Injectable } from '@angular/core';
import { ProjectSummary, ProjectType } from '../../content/models/portfolio-content.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  filterSummaries(
    projects: readonly ProjectSummary[],
    projectType: ProjectType,
    technologies: readonly string[] = []
  ): readonly ProjectSummary[] {
    return projects.filter(
      (project) =>
        (projectType === 'ALL' || project.projectType === projectType) &&
        technologies.every((technology) => project.technologies.includes(technology))
    );
  }
}
