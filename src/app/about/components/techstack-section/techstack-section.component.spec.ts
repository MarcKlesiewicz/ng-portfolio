import { beforeEach, describe, expect, it } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechstackSectionComponent } from './techstack-section.component';

describe('TechstackSectionComponent', () => {
  let fixture: ComponentFixture<TechstackSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechstackSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TechstackSectionComponent);
    fixture.detectChanges();
  });

  it('groups tools around durable working practices', () => {
    const element: HTMLElement = fixture.nativeElement;
    const headings = Array.from(element.querySelectorAll('h3')).map((heading) => heading.textContent?.trim());

    expect(headings).toEqual(['Interface craft', 'Systems & data', 'Shape & explain', 'Ship & improve']);
    expect(element.textContent).toContain('Angular');
    expect(element.textContent).toContain('Figma');
    expect(element.textContent).toContain('Karma');
    expect(element.querySelector('button')).toBeNull();
  });
});
