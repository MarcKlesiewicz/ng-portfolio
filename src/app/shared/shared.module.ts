import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SocialsComponent } from './src/socials/socials.component';
import { HovableIconComponent } from './src/hovable-icon/hovable-icon.component';
import { WavyHeaderComponent } from './components/wavy-header/wavy-header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SocialsComponent, HovableIconComponent, WavyHeaderComponent],
  exports: [SocialsComponent, HovableIconComponent, WavyHeaderComponent],
})
export class SharedModule {}
