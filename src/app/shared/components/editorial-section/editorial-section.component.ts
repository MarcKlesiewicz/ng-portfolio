import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-editorial-section',
  templateUrl: './editorial-section.component.html',
  styleUrl: './editorial-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': '"editorial-section-host editorial-section-host--" + layout' },
})
export class EditorialSectionComponent {
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() layout: 'standard' | 'offset' | 'wide' = 'standard';
  @Input() tone: 'ink' | 'paper' = 'ink';
}
