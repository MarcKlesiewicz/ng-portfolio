import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AboutDescriptionSectionComponent } from './components/about-description-section/about-description-section.component';
import { TestimonialCarouselComponent } from './components/testimonial-carousel/testimonial-carousel.component';
import { ResumeTimelineComponent } from './components/resume-timeline/resume-timeline.component';
import { OrbitMarkComponent } from '../shared/components/orbit-mark/orbit-mark.component';
import { PortfolioIndexComponent } from '../shared/components/portfolio-index/portfolio-index.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [
    RouterLink,
    AboutDescriptionSectionComponent,
    TestimonialCarouselComponent,
    ResumeTimelineComponent,
    OrbitMarkComponent,
    PortfolioIndexComponent,
  ],
})
export class AboutComponent {}
