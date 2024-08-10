import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { AboutRoutingComonent } from './about-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AboutDescriptionSectionComponent } from './components/about-description-section/about-description-section.component';

@NgModule({
  imports: [AboutRoutingComonent, MatSelectModule, BrowserAnimationsModule, CommonModule],
  declarations: [AboutComponent, AboutDescriptionSectionComponent],
  exports: [AboutDescriptionSectionComponent],
})
export class AboutModule {}
