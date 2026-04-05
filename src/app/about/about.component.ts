import { Component } from '@angular/core';
import { AboutDescriptionSectionComponent } from './components/about-description-section/about-description-section.component';
import { TechstackSectionComponent } from './components/techstack-section/techstack-section.component';
import { ResumeTimelineComponent } from './components/resume-timeline/resume-timeline.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [AboutDescriptionSectionComponent, TechstackSectionComponent, ResumeTimelineComponent],
})
export class AboutComponent {}
