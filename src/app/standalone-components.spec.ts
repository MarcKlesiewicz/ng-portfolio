import { describe, expect, it } from 'vitest';
import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AboutDescriptionSectionComponent } from './about/components/about-description-section/about-description-section.component';
import { ResumeTimelineComponent } from './about/components/resume-timeline/resume-timeline.component';
import { TestimonialCarouselComponent } from './about/components/testimonial-carousel/testimonial-carousel.component';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './home/components/hero-section/hero-section.component';
import { HomeComponent } from './home/home.component';
import { OrbitMarkComponent } from './shared/components/orbit-mark/orbit-mark.component';
import { PortfolioIndexComponent } from './shared/components/portfolio-index/portfolio-index.component';
import { WavyHeaderComponent } from './shared/components/wavy-header/wavy-header.component';
import { WorkCardComponent } from './work/components/work-card/work-card.component';
import { WorkDetailPageComponent } from './work/work-detail-page/work-detail-page.component';
import { WorkPageComponent } from './work/work-page/work-page.component';

const STANDALONE_COMPONENTS: Type<unknown>[] = [
  AppComponent,
  HomeComponent,
  HeroSectionComponent,
  AboutComponent,
  AboutDescriptionSectionComponent,
  ResumeTimelineComponent,
  TestimonialCarouselComponent,
  OrbitMarkComponent,
  PortfolioIndexComponent,
  WavyHeaderComponent,
  WorkPageComponent,
  WorkDetailPageComponent,
  WorkCardComponent,
];

describe('standalone component graph', () => {
  for (const component of STANDALONE_COMPONENTS) {
    it(`creates ${component.name} from its standalone imports`, async () => {
      await TestBed.configureTestingModule({
        imports: [component],
        providers: [provideRouter([])],
      }).compileComponents();

      const fixture = TestBed.createComponent(component);
      fixture.detectChanges();

      expect(fixture.componentInstance).toBeTruthy();
      fixture.destroy();
    });
  }
});
