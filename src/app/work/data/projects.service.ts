import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project, ProjectType } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private readonly _projectSubject = new BehaviorSubject<Project[]>([]);

  constructor() {
    this.fetchProjects();
  }

  projects$(): Observable<Project[]> {
    return this._projectSubject.asObservable();
  }

  getProjectById(id: string): Project | undefined {
    return projects.find((project) => project.id === id);
  }

  filterProjects(projectType: ProjectType): void {
    if (projectType === 'ALL') {
      this.fetchProjects();
      return;
    }

    const filteredProjects = projects.filter((project) => project.projectType.includes(projectType));
    this._projectSubject.next(filteredProjects);
  }

  private fetchProjects(): void {
    this._projectSubject.next(projects);
  }
}

const projects: Project[] = [
  {
    id: '1',
    name: 'Monto',
    description: 'Mobile and web based rental platform build in Flutter',
    thumbnail: 'assets/images/monto/monto_phones.png',
    logo: 'assets/images/monto/monto_logo.jpg',
    technologies: ['Flutter', 'Dart', 'Riverpod', 'MongoDB', 'GraphQL', 'Material', 'ClickUp'],
    projectType: 'WORK',
    contentPath: 'assets/html/monto.html',
    year: 2022,
    liveUrl: 'https://monto-rent.com',
  },

  {
    id: '2',
    name: `Up N' Down`,
    description: 'Golf exercise application build in Flutter',
    thumbnail: '/assets/images/und/und_phones.png',
    logo: '/assets/images/und/und_logo.jpg',
    technologies: ['Flutter', 'Dart', 'Riverpod', 'MongoDB', 'GraphQL', 'Material', 'ClickUp'],
    projectType: 'WORK',
    contentPath: 'assets/html/und.html',
    year: 2022,
    liveUrl: 'https://upndown.dk',
  },

  {
    id: '3',
    name: 'MyEpi',
    description: 'Epileptic seizure detection for Apple Watch',
    thumbnail: '/assets/images/myepi/epi_home.jpg',
    logo: '/assets/images/myepi/epi_logo.jpg',
    technologies: ['Flutter', 'Dart', 'Riverpod', 'Firebase', 'Figma', 'ClickUp'],
    projectType: 'WORK',
    contentPath: 'assets/html/my-epi.html',
    year: 2023,
    liveUrl: 'https://www.myepi.dk/',
  },

  {
    id: '4',
    name: 'Selvhent',
    description: 'Digital parcel shop management system',
    thumbnail: '/assets/images/selvhent/selvhent_customer.jpg',
    logo: '/assets/images/selvhent/selvhent_logo.jpg',
    technologies: ['Flutter', 'Dart', 'Riverpod', 'MongoDB', 'GraphQL', 'ClickUp'],
    projectType: 'WORK',
    contentPath: 'assets/html/selvhent.html',
    year: 2022,
    liveUrl: 'https://selvhent.com/',
  },
  {
    id: '5',
    name: 'Mealbuilder',
    description: 'Recipe and meal planning application with indebth nutrition information',
    thumbnail: '/assets/images/mealbuilder/mealbuilder_screens.jpg',
    logo: '/assets/images/mealbuilder/mealbuilder_logo.jpg',
    technologies: ['Flutter', 'Dart', 'Riverpod', 'Swagger', 'Material', 'ClickUp'],
    projectType: 'WORK',
    contentPath: 'assets/html/mealbuilder.html',
    year: 2023,
  },
];
