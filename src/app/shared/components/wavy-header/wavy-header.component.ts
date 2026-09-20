import { Component, input } from '@angular/core';

@Component({
  selector: 'app-wavy-header',
  templateUrl: './wavy-header.component.html',
  styleUrls: ['./wavy-header.component.scss'],
})
export class WavyHeaderComponent {
  readonly title = input('');
}
