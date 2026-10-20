import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { WorkDetailPageComponent } from './work-detail-page.component';

describe('WorkDetailPageComponent', () => {
  let fixture: ComponentFixture<WorkDetailPageComponent>;
  let paramMap: BehaviorSubject<ReturnType<typeof convertToParamMap>>;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    history.replaceState({}, '');
    paramMap = new BehaviorSubject(convertToParamMap({ slug: 'monto' }));

    await TestBed.configureTestingModule({
      imports: [WorkDetailPageComponent],
      providers: [provideRouter([]), { provide: ActivatedRoute, useValue: { paramMap } }],
    }).compileComponents();

    location = TestBed.inject(Location);
    router = TestBed.inject(Router);
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
    expect(backLink?.querySelector('fa-icon[aria-hidden="true"] svg[data-icon="arrow-left"]')).toBeTruthy();
  });

  it('returns through browser history when opened from the work list', () => {
    history.replaceState({ fromWorkList: true }, '');
    const element = renderDetail('monto');
    const back = vi.spyOn(location, 'back').mockImplementation(() => undefined);

    element.querySelector<HTMLAnchorElement>('.back-link')?.click();

    expect(back).toHaveBeenCalledOnce();
  });

  it('routes to the work list when the detail page was opened directly', () => {
    const element = renderDetail('monto');
    const navigate = vi.spyOn(router, 'navigateByUrl').mockResolvedValue(true);

    element.querySelector<HTMLAnchorElement>('.back-link')?.click();

    expect(navigate).toHaveBeenCalledWith('/work');
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
    expect(componentStyles).toMatch(
      /\.work-detail-footer[^}]*animation: fade-in-animation 0\.8s 0\.7s ease-out forwards/,
    );
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

  it('renders the Dashtab project and its complete feature set', () => {
    const element = renderDetail('dashtab');
    const features = Array.from(element.querySelectorAll('.story-features li')).map((item) => item.textContent?.trim());

    expect(element.querySelector('h1')?.textContent).toContain('Dashtab');
    expect(features).toEqual([
      'Large clock and personal greeting',
      'Focus timer with a dedicated focus mode',
      'Movement reminder for sitting and standing intervals',
      'Water intake barometer with daily pacing',
      'Weather widget using the current location',
    ]);
    expect(element.querySelector<HTMLAnchorElement>('.work-detail-actions a[target="_blank"]')?.href).toBe(
      'https://github.com/MarcKlesiewicz/Dashtab',
    );
  });

  it('renders Image Bingo with its local-first story and live application link', () => {
    const element = renderDetail('image-bingo');
    const features = Array.from(element.querySelectorAll('.story-features li')).map((item) => item.textContent?.trim());

    expect(element.querySelector('h1')?.textContent).toContain('Image Bingo');
    expect(features).toHaveLength(6);
    expect(element.querySelector('.story-callout')?.textContent).toContain('Private by design');
    expect(element.querySelectorAll('.story-media img')).toHaveLength(2);
    expect(element.querySelector<HTMLAnchorElement>('.work-detail-actions a[target="_blank"]')?.href).toBe(
      'https://image-bingo.klesiewicz.dev/',
    );
  });

  it('presents Autocom as a long-form professional case study', () => {
    const element = renderDetail('autocom');
    const sectionHeadings = Array.from(element.querySelectorAll('.work-story h2')).map((heading) =>
      heading.textContent?.trim(),
    );

    expect(element.querySelector('.work-detail-meta')?.textContent).toContain('2023–present');
    expect(element.textContent).toContain('features used across multiple European marketplaces');
    expect(sectionHeadings).toContain('The buying journey');
    expect(sectionHeadings).toContain('Marketplace tooling');
    expect(sectionHeadings).toContain('Engineering foundations');
    expect(element.querySelectorAll('.story-media img')).toHaveLength(2);
    expect(element.querySelector<HTMLAnchorElement>('.work-detail-actions a[target="_blank"]')?.href).toBe(
      'https://m.autocom.dk/',
    );
  });

  it('uses Font Awesome markers for technologies instead of Unicode symbols', () => {
    const element = renderDetail('myepi');
    const technology = element.querySelector('.technology-list li');

    expect(technology?.textContent?.trim()).toBe('Flutter');
    expect(technology?.querySelector('fa-icon[aria-hidden="true"] svg[data-icon="diamond"]')).toBeTruthy();
  });

  it('uses Font Awesome icons for work actions without exposing icon text', () => {
    const element = renderDetail('myepi');
    const liveLink = element.querySelector<HTMLAnchorElement>('.work-detail-actions a[target="_blank"]');
    const returnLink = element.querySelector<HTMLAnchorElement>('.work-detail-actions a:not([target])');

    expect(liveLink?.getAttribute('href')).toBe('https://www.myepi.dk/');
    expect(liveLink?.textContent?.trim()).toBe('myepi.dk');
    expect(
      liveLink?.querySelector('fa-icon[aria-hidden="true"] svg[data-icon="arrow-up-right-from-square"]'),
    ).toBeTruthy();
    expect(returnLink?.querySelector('fa-icon[aria-hidden="true"] svg[data-icon="arrow-right"]')).toBeTruthy();
  });
});
