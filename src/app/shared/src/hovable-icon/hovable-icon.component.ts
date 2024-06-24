import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hovable-icon',
  templateUrl: './hovable-icon.component.html',
  styleUrls: ['./hovable-icon.component.scss'],
})
export class HovableIconComponent {
  @Input() iconPath: string = '';
  @Input() iconAlt: string = '';
  @Input() link?: string;
  @Input() defaultFilter?: string;
  @Input() hoverFilter?: string;

  isHovering: boolean = false;
}
