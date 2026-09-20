import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wavy-header',
  templateUrl: './wavy-header.component.html',
  styleUrls: ['./wavy-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class WavyHeaderComponent {
  @Input() title: string = '';
}
