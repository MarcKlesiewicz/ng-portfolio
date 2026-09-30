import { beforeEach, describe, expect, it } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { WorkPageComponent } from './work-page.component';

describe('WorkPageComponent', () => {
  let component: WorkPageComponent;
  let fixture: ComponentFixture<WorkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkPageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders all work items', () => {
    const cards = fixture.nativeElement.querySelectorAll('app-work-card');

    expect(cards.length).toBe(component.workItems.length);
    expect(cards.length).toBe(5);
  });

  it('renders the editorial work masthead and page navigation', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('h1')?.textContent).toContain('Work');
    expect(element.querySelector('app-orbit-mark')).not.toBeNull();
    expect(element.querySelector('app-portfolio-index')).not.toBeNull();
  });

  it('keeps inline space around the display-font glyphs', () => {
    const element: HTMLElement = fixture.nativeElement;
    const heading = element.querySelector<HTMLHeadingElement>('app-page-masthead h1');

    expect(heading).not.toBeNull();
    if (!heading) throw new Error('Expected the work masthead heading to render');
    expect(getComputedStyle(heading).paddingInline).toBe('0.08em');
  });
});
