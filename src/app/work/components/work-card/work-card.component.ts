import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WorkItem } from '@app/work/models/work-item.model';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrl: './work-card.component.scss',
  imports: [RouterLink],
})
export class WorkCardComponent {
  readonly work = input<WorkItem>();
  readonly reverse = input(false);
}
