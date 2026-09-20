import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HovableIconComponent } from '../hovable-icon/hovable-icon.component';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [HovableIconComponent],
})
export class SocialsComponent {}
