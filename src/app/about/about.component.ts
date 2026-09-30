import { Component } from '@angular/core';
import { AboutDescriptionSectionComponent } from './components/about-description-section/about-description-section.component';
import { TestimonialCarouselComponent } from './components/testimonial-carousel/testimonial-carousel.component';
import { ResumeTimelineComponent } from './components/resume-timeline/resume-timeline.component';
import { OrbitMarkComponent } from '../shared/components/orbit-mark/orbit-mark.component';
import { PortfolioIndexComponent } from '../shared/components/portfolio-index/portfolio-index.component';
import { PageMastheadComponent } from '../shared/components/page-masthead/page-masthead.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [
    PageMastheadComponent,
    AboutDescriptionSectionComponent,
    TestimonialCarouselComponent,
    ResumeTimelineComponent,
    OrbitMarkComponent,
    PortfolioIndexComponent,
  ],
})
export class AboutComponent {}
