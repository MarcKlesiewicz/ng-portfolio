import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProjectStoryBlock } from '../../../content/models/portfolio-content.model';

@Component({
  selector: 'app-project-story',
  templateUrl: './project-story.component.html',
  styleUrl: './project-story.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectStoryComponent {
  @Input({ required: true }) blocks: readonly ProjectStoryBlock[] = [];
}
