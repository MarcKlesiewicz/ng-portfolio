import { beforeEach, describe, expect, it } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { PortfolioIndexComponent } from './portfolio-index.component';

describe('PortfolioIndexComponent', () => {
  let fixture: ComponentFixture<PortfolioIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioIndexComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioIndexComponent);
  });

  it('renders the About-page navigation variant', () => {
    fixture.componentRef.setInput('current', 'about');
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const links = Array.from(element.querySelectorAll<HTMLAnchorElement>('a.index-link'));
    const currentItem = element.querySelector<HTMLElement>('.index-link[aria-current="page"]');

    expect(element.textContent).not.toContain('Home');
    expect(currentItem?.textContent).toContain('About');
    expect(currentItem?.textContent).toContain('I');
    expect(links[0].textContent).toContain('II');
    expect(links).toHaveLength(1);
  });

  it('reflects optional input changes and preserves their defaults', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.contact-strip')).toBeNull();
    expect(fixture.nativeElement.textContent).not.toContain('Home');

    fixture.componentRef.setInput('includeHome', true);
    fixture.componentRef.setInput('showContact', true);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.contact-strip')).not.toBeNull();
    expect(fixture.nativeElement.textContent).toContain('Home');
  });

  it('renders Work as the current page instead of a link and omits the GitHub navigation item', () => {
    fixture.componentRef.setInput('current', 'work');
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const currentItem = element.querySelector<HTMLElement>('.index-link[aria-current="page"]');
    const workLink = element.querySelector<HTMLAnchorElement>('a[routerlink="/work"]');

    expect(currentItem?.textContent).toContain('Work');
    expect(currentItem?.textContent).toContain('II');
    expect(workLink).toBeNull();
    expect(element.querySelector('nav')?.textContent).not.toContain('GitHub');
  });
});
