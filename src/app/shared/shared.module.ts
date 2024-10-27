import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SocialsComponent } from './src/socials/socials.component';
import { HovableIconComponent } from './src/hovable-icon/hovable-icon.component';
import { WavyHeaderComponent } from './components/wavy-header/wavy-header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SocialsComponent, HovableIconComponent, WavyHeaderComponent, NavBarComponent],
  exports: [SocialsComponent, HovableIconComponent, WavyHeaderComponent, NavBarComponent],
})
export class SharedModule {}
