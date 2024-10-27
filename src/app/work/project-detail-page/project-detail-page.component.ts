import { Component, inject, OnInit } from '@angular/core';
import { ProjectsService } from '../data/projects.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-detail-page',
  templateUrl: './project-detail-page.component.html',
  styleUrl: './project-detail-page.component.scss',
})
export class ProjectDetailPageComponent implements OnInit {
  project: Project | undefined;

  private readonly projectService: ProjectsService = inject(ProjectsService);

  ngOnInit(): void {
    this.project = this.projectService.getProjectById('1');
  }
}
