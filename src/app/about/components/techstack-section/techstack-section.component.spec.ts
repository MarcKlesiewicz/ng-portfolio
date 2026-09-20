import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechstackSectionComponent } from './techstack-section.component';

@Component({
  selector: 'app-wavy-header',
  template: '',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
class WavyHeaderStubComponent {}

describe('TechstackSectionComponent', () => {
  let fixture: ComponentFixture<TechstackSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechstackSectionComponent, WavyHeaderStubComponent],
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
