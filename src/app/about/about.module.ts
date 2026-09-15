import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { CommonModule } from '@angular/common';
import { AboutDescriptionSectionComponent } from './components/about-description-section/about-description-section.component';
import { TechstackSectionComponent } from './components/techstack-section/techstack-section.component';
import { SharedModule } from '@app/shared/shared.module';
import { AboutPointSectionComponent } from './components/about-point-section/about-point-section.component';
import { ResumeTimelineComponent } from './components/resume-timeline/resume-timeline.component';
import { TestimonialCarouselComponent } from './components/testimonial-carousel/testimonial-carousel.component';

@NgModule({
  imports: [AboutRoutingModule, CommonModule, SharedModule],
  declarations: [
    AboutComponent,
    AboutDescriptionSectionComponent,
    TechstackSectionComponent,
    AboutPointSectionComponent,
    ResumeTimelineComponent,
    TestimonialCarouselComponent,
  ],
})
export class AboutModule {}
