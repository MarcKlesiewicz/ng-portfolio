import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SocialsComponent } from './src/socials/socials.component';
import { HovableIconComponent } from './src/hovable-icon/hovable-icon.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SocialsComponent, HovableIconComponent],
  exports: [SocialsComponent, HovableIconComponent],
})
export class SharedModule {}
