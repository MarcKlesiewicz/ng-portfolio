import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-hovable-icon',
  templateUrl: './hovable-icon.component.html',
  styleUrls: ['./hovable-icon.component.scss'],
  imports: [NgClass],
})
export class HovableIconComponent {
  @Input() iconPath: string = '';
  @Input() iconAlt: string = '';
  @Input() link?: string;
  @Input() defaultFilter?: string;
  @Input() hoverFilter?: string;

  isHovering: boolean = false;
}
