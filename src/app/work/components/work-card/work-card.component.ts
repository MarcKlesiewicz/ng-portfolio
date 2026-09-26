import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WorkItem } from '@app/work/models/work-item.model';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faDiamond } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrl: './work-card.component.scss',
  imports: [RouterLink, FaIconComponent],
})
export class WorkCardComponent {
  readonly faArrowRight = faArrowRight;
  readonly faDiamond = faDiamond;

  readonly work = input<WorkItem>();
  readonly reverse = input(false);
}
