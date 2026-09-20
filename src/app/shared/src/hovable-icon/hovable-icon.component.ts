import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-hovable-icon',
  templateUrl: './hovable-icon.component.html',
  styleUrls: ['./hovable-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgClass],
})
export class HovableIconComponent {
  readonly iconPath = input('');
  readonly iconAlt = input('');
  readonly link = input<string>();
  readonly defaultFilter = input<string>();
  readonly hoverFilter = input<string>();

  readonly isHovering = signal(false);
}
