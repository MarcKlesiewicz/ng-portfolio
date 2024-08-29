import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { AboutRoutingComonent } from './about-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AboutDescriptionSectionComponent } from './components/about-description-section/about-description-section.component';
import { TechstackSectionComponent } from './components/techstack-section/techstack-section.component';
import { WavyHeaderComponent } from '@app/shared/components/wavy-header/wavy-header.component';
import { SharedModule } from '@app/shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { AboutPointSectionComponent } from './components/about-point-section/about-point-section.component';

@NgModule({
  imports: [
    AboutRoutingComonent,
    MatSelectModule,
    BrowserAnimationsModule,
    CommonModule,
    SharedModule,
    MatGridListModule,
    MatIconModule,
  ],
  declarations: [
    AboutComponent,
    AboutDescriptionSectionComponent,
    TechstackSectionComponent,
    AboutPointSectionComponent,
  ],
  exports: [AboutDescriptionSectionComponent, TechstackSectionComponent, AboutPointSectionComponent],
})
export class AboutModule {}
