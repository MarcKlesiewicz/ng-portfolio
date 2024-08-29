import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wavy-header',
  templateUrl: './wavy-header.component.html',
  styleUrls: ['./wavy-header.component.scss'],
})
export class WavyHeaderComponent {
  @Input() title: string = '';
  @Input() bgColor: string = '';
}
