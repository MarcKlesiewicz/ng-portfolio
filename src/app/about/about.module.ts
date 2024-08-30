import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { AboutRoutingComonent } from './about-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AboutDescriptionSectionComponent } from './components/about-description-section/about-description-section.component';
import { TechstackSectionComponent } from './components/techstack-section/techstack-section.component';
import { SharedModule } from '@app/shared/shared.module';
import { AboutPointSectionComponent } from './components/about-point-section/about-point-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [AboutRoutingComonent, BrowserAnimationsModule, CommonModule, SharedModule, FormsModule],
  declarations: [
    AboutComponent,
    AboutDescriptionSectionComponent,
    TechstackSectionComponent,
    AboutPointSectionComponent,
  ],
  exports: [AboutDescriptionSectionComponent, TechstackSectionComponent, AboutPointSectionComponent],
})
export class AboutModule {}
