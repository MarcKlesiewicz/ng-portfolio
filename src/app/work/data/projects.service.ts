import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project, ProjectTags } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  private readonly projectSubject = new BehaviorSubject<Project[]>([]);

  projects$(): Observable<Project[]> {
    this.fetchProjects();
    return this.projectSubject.asObservable();
  }

  private fetchProjects(): void {
    this.projectSubject.next(projects());
  }
}

const projects = () => [
  {
    id: '1',
    name: 'Monto',
    description: 'Mobile and web based rental platform build in Flutter',
    thumbnail: 'assets/images/monto/monto_phones.png',
    logo: 'assets/images/monto/monto_logo.jpg',
    technologies: ['Flutter', 'Dart', 'MongoDB', 'GraphQL'],
    tags: [ProjectTags.WORK],
    markdownPath: '',
    year: 2022,
  },

  {
    id: '2',
    name: `Up N' Down`,
    description: 'Golf exercise application build in Flutter',
    thumbnail: '/assets/images/und/und_phones.png',
    logo: '/assets/images/und/und_logo.jpg',
    technologies: ['Flutter', 'Dart', 'MongoDB', 'GraphQL'],
    tags: [ProjectTags.WORK],
    markdownPath: '',
    year: 2022,
  },

  {
    id: '3',
    name: 'MyEpi',
    description: 'Epileptic seizure detection for Apple Watch',
    thumbnail: '/assets/images/myepi/epi_home.jpg',
    logo: '/assets/images/myepi/epi_logo.jpg',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    tags: [ProjectTags.WORK],
    markdownPath: '',
    year: 2023,
  },

  {
    id: '4',
    name: 'Selvhent',
    description: 'Digital parcel shop management system',
    thumbnail: '/assets/images/selvhent/selvhent_customer.jpg',
    logo: '/assets/images/selvhent/selvhent_logo.jpg',
    technologies: ['Flutter', 'Dart', 'MongoDB', 'GraphQL'],
    tags: [ProjectTags.WORK],
    markdownPath: '',
    year: 2022,
  },
  {
    id: '5',
    name: 'Mealbuilder',
    description: 'Recipe and meal planning application with indebth nutrition information',
    thumbnail: '/assets/images/mealbuilder/mealbuilder_screens.jpg',
    logo: '/assets/images/mealbuilder/mealbuilder_logo.jpg',
    technologies: ['Flutter', 'Dart', 'Postgress', 'GraphQL'],
    tags: [ProjectTags.WORK],
    markdownPath: '',
    year: 2022,
  },
];
