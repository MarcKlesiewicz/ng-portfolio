import { describe, expect, it } from 'vitest';
import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AboutDescriptionSectionComponent } from './about/components/about-description-section/about-description-section.component';
import { AboutPointSectionComponent } from './about/components/about-point-section/about-point-section.component';
import { ResumeTimelineComponent } from './about/components/resume-timeline/resume-timeline.component';
import { TechstackSectionComponent } from './about/components/techstack-section/techstack-section.component';
import { TestimonialCarouselComponent } from './about/components/testimonial-carousel/testimonial-carousel.component';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './home/components/hero-section/hero-section.component';
import { WorkSectionComponent } from './home/components/work-section/work-section.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { OrbitMarkComponent } from './shared/components/orbit-mark/orbit-mark.component';
import { PortfolioIndexComponent } from './shared/components/portfolio-index/portfolio-index.component';
import { WavyHeaderComponent } from './shared/components/wavy-header/wavy-header.component';
import { HovableIconComponent } from './shared/src/hovable-icon/hovable-icon.component';
import { SocialsComponent } from './shared/src/socials/socials.component';
import { ProjectCardComponent } from './work/components/project-card/project-card.component';
import { ProjectFilterComponent } from './work/components/project-filter/project-filter.component';
import { ProjectPageComponent } from './work/project-page/project-page.component';

const STANDALONE_COMPONENTS: Type<unknown>[] = [
  AppComponent,
  HomeComponent,
  HeroSectionComponent,
  WorkSectionComponent,
  AboutComponent,
  AboutDescriptionSectionComponent,
  AboutPointSectionComponent,
  ResumeTimelineComponent,
  TechstackSectionComponent,
  TestimonialCarouselComponent,
  NavBarComponent,
  OrbitMarkComponent,
  PortfolioIndexComponent,
  WavyHeaderComponent,
  HovableIconComponent,
  SocialsComponent,
  ProjectPageComponent,
  ProjectCardComponent,
  ProjectFilterComponent,
];

describe('standalone component graph', () => {
  for (const component of STANDALONE_COMPONENTS) {
    it(`creates ${component.name} from its standalone imports`, async () => {
      await TestBed.configureTestingModule({
        imports: [component],
        providers: [provideRouter([]), provideNoopAnimations()],
      }).compileComponents();

      const fixture = TestBed.createComponent(component);
      fixture.detectChanges();

      expect(fixture.componentInstance).toBeTruthy();
      fixture.destroy();
    });
  }
});
