import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PROJECTS } from './projects.data';
import { Project, ProjectTechnologies, ProjectType } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private readonly projectSubject = new BehaviorSubject<readonly Project[]>(PROJECTS);

  readonly projects$: Observable<readonly Project[]> = this.projectSubject.asObservable();

  getProjectById(id: string | null): Project | undefined {
    return PROJECTS.find((project) => project.id === id);
  }

  filterProjects(projectType: ProjectType, technologies: ProjectTechnologies[] = []): void {
    let filteredProjects = PROJECTS;

    if (projectType !== 'ALL') {
      filteredProjects = filteredProjects.filter((project) => project.projectType === projectType);
    }

    if (technologies.length > 0) {
      filteredProjects = filteredProjects.filter((project) =>
        technologies.every((tech) => project.technologies.includes(tech))
      );
    }

    this.projectSubject.next(filteredProjects);
  }
}
