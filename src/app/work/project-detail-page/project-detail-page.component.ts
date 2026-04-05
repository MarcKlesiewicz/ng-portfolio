import { LowerCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EMPTY, switchMap } from 'rxjs';
import { ProjectsService } from '../data/projects.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-detail-page',
  templateUrl: './project-detail-page.component.html',
  styleUrl: './project-detail-page.component.scss',
  imports: [RouterLink, LowerCasePipe],
})
export class ProjectDetailPageComponent implements OnInit {
  project: Project | undefined;

  private readonly projectService: ProjectsService = inject(ProjectsService);
  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.route.params
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        switchMap((params) => {
          this.project = this.projectService.getProjectById(params['id']);
          if (!this.project) {
            return EMPTY;
          }
          return this.httpClient.get(this.project?.contentPath, { responseType: 'text' });
        })
      )
      .subscribe((html) => {
        if (!this.project) {
          return;
        }
        this.project.content = html;
      });
  }
}
