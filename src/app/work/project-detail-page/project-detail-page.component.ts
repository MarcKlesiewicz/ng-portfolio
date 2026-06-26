import { AsyncPipe, LowerCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { ProjectsService } from '../data/projects.service';
import { Project } from '../models/project.model';

interface ProjectDetailViewModel {
  project: Project | undefined;
  content: string;
}

@Component({
  selector: 'app-project-detail-page',
  templateUrl: './project-detail-page.component.html',
  styleUrl: './project-detail-page.component.scss',
  imports: [RouterLink, LowerCasePipe, AsyncPipe],
})
export class ProjectDetailPageComponent {
  private readonly projectService: ProjectsService = inject(ProjectsService);
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  readonly vm$: Observable<ProjectDetailViewModel> = this.route.paramMap.pipe(
    map((params) => this.projectService.getProjectById(params.get('id'))),
    switchMap((project) => {
      if (!project) {
        return of({ project: undefined, content: '' });
      }

      return this.httpClient.get(project.contentPath, { responseType: 'text' }).pipe(
        map((content): ProjectDetailViewModel => ({ project, content })),
        catchError(() => of({ project, content: '' }))
      );
    })
  );
}
