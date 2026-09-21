import { beforeEach, describe, expect, it } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTimelineComponent } from './resume-timeline.component';

describe('ResumeTimelineComponent', () => {
  let fixture: ComponentFixture<ResumeTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ResumeTimelineComponent] }).compileComponents();
    fixture = TestBed.createComponent(ResumeTimelineComponent);
    fixture.detectChanges();
  });

  it('does not opt resume cards into DaisyUI split timeline columns', () => {
    const element: HTMLElement = fixture.nativeElement;
    const cards = Array.from(element.querySelectorAll<HTMLElement>('.resume-card'));

    expect(cards).toHaveLength(fixture.componentInstance.resumeItems.length);
    expect(cards.every((card) => !card.classList.contains('timeline-start'))).toBe(true);
  });
});
