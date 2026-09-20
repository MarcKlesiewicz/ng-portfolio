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
    const backLink = element.querySelector<HTMLAnchorElement>('.back-link');
    expect(backLink?.getAttribute('href')).toBe('/work');
    expect(backLink?.textContent).toContain('Back to all work');
    expect(backLink?.querySelector('.back-link-icon')?.getAttribute('aria-hidden')).toBe('true');
  });

  it('uses the same staggered entry animation as the editorial pages', () => {
    renderDetail('monto');
    const componentStyles = Array.from(document.head.querySelectorAll('style'))
      .find((style) => style.textContent?.includes('.work-detail-page'))
      ?.textContent?.replace(/\s+/g, ' ');

    expect(componentStyles).toBeTruthy();
    expect(componentStyles).toMatch(/\.back-link[^}]*animation: fade-in-animation 0\.8s ease-out forwards/);
    expect(componentStyles).toMatch(/\.work-detail-header[^}]*animation: [^;]*_title-in 0\.9s 0\.1s/);
    expect(componentStyles).toMatch(/\.work-story[^}]*animation: fade-in-animation 0\.8s 0\.52s ease-out forwards/);
    expect(componentStyles).toMatch(/\.work-detail-footer[^}]*animation: fade-in-animation 0\.8s 0\.7s ease-out forwards/);
    expect(componentStyles).toMatch(/prefers-reduced-motion: reduce[^]*\.work-detail-footer[^}]*animation: none/);
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

  it('renders a paired outcome and the restored project narrative', () => {
    const element = renderDetail('myepi');
    const facts = Array.from(element.querySelectorAll('.work-facts > div')).map((fact) => fact.textContent?.trim());

    expect(facts).toEqual([expect.stringContaining('Contribution'), expect.stringContaining('Outcome')]);
    expect(element.textContent).toContain('Watch application');
    expect(element.textContent).toContain('built-in sensor technology');
  });

  it('presents notable features as a dedicated capability section', () => {
    const element = renderDetail('monto');
    const featureSection = element.querySelector('.story-features');

    expect(featureSection?.querySelector('h2')?.textContent).toContain('Notable features');
    expect(featureSection?.querySelectorAll('li')).toHaveLength(7);
  });

  it('uses the readable domain as the external work link label', () => {
    const element = renderDetail('myepi');
    const liveLink = element.querySelector<HTMLAnchorElement>('.work-detail-actions a[target="_blank"]');

    expect(liveLink?.getAttribute('href')).toBe('https://www.myepi.dk/');
    expect(liveLink?.textContent?.trim()).toBe('myepi.dk ↗');
  });
});
