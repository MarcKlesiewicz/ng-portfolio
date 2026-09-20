import { beforeEach, describe, expect, it } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { WorkDetailPageComponent } from './work-detail-page.component';

describe('WorkDetailPageComponent', () => {
  let fixture: ComponentFixture<WorkDetailPageComponent>;
  let paramMap: BehaviorSubject<ReturnType<typeof convertToParamMap>>;

  beforeEach(async () => {
    paramMap = new BehaviorSubject(convertToParamMap({ slug: 'monto' }));

    await TestBed.configureTestingModule({
      imports: [WorkDetailPageComponent],
      providers: [provideRouter([]), { provide: ActivatedRoute, useValue: { paramMap } }],
    }).compileComponents();
  });

  function renderDetail(slug: string): HTMLElement {
    paramMap.next(convertToParamMap({ slug }));
    fixture = TestBed.createComponent(WorkDetailPageComponent);
    fixture.detectChanges();
    return fixture.nativeElement;
  }

  it('renders the selected work story and a route back to the archive', () => {
    const element = renderDetail('monto');

    expect(element.querySelector('h1')?.textContent).toContain('Monto');
    expect(element.textContent).toContain('Notable features');
    expect(element.querySelector<HTMLAnchorElement>('.back-link')?.getAttribute('href')).toBe('/work');
  });

  it('renders the not-found view for an unknown work slug', () => {
    const element = renderDetail('missing-work');

    expect(element.querySelector('.work-not-found h1')?.textContent).toContain('wandered off');
    expect(element.querySelector<HTMLAnchorElement>('.work-not-found a')?.getAttribute('href')).toBe('/work');
  });

  it('renders optional story content without empty facts or actions', () => {
    const element = renderDetail('mealbuilder');

    expect(element.querySelector('.story-callout')?.textContent).toContain('Product focus');
    expect(element.querySelector('.work-facts')).toBeNull();
    expect(element.querySelector<HTMLAnchorElement>('.work-detail-actions a[target="_blank"]')).toBeNull();
  });
});
