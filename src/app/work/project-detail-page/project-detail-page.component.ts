import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { ProjectStoryComponent } from '../components/project-story/project-story.component';
import { ProjectResolution } from '../data/project.resolver';

@Component({
  selector: 'app-project-detail-page',
  templateUrl: './project-detail-page.component.html',
  styleUrl: './project-detail-page.component.scss',
  imports: [AsyncPipe, RouterLink, ProjectStoryComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailPageComponent {
  private readonly route = inject(ActivatedRoute);
  readonly resolution$ = this.route.data.pipe(map((data) => data['project'] as ProjectResolution));
}
