import { beforeEach, describe, expect, it } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
  });

  it('keeps inline space around the display-font glyphs', () => {
    const element: HTMLElement = fixture.nativeElement;
    const heading = element.querySelector<HTMLHeadingElement>('app-page-masthead h1');

    expect(heading).not.toBeNull();
    if (!heading) throw new Error('Expected the about masthead heading to render');
    expect(getComputedStyle(heading).paddingInline).toBe('0.08em');
  });
});
