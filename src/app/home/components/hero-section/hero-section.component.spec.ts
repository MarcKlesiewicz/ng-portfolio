import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HeroSectionComponent } from './hero-section.component';

describe('HeroSectionComponent', () => {
  let component: HeroSectionComponent;
  let fixture: ComponentFixture<HeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the portfolio identity and primary destinations', () => {
    const element: HTMLElement = fixture.nativeElement;
    const links = Array.from(element.querySelectorAll<HTMLAnchorElement>('.index-link'));

    expect(element.querySelector('h1')?.textContent).toContain('Marc');
    expect(element.querySelector('h1')?.textContent).toContain('Klesiewicz');
    expect(links.map((link) => link.textContent?.replace(/\s+/g, ' ').trim())).toEqual([
      expect.stringMatching(/About.*I/),
      expect.stringMatching(/Projects.*II/),
      expect.stringMatching(/GitHub.*III/),
    ]);
    expect(links[0].getAttribute('href')).toBe('/about');
    expect(links[1].getAttribute('href')).toBe('/projects');
    expect(links[2].getAttribute('href')).toBe('https://github.com/MarcKlesiewicz');
  });

  it('moves the title and trailing shadow in response to the pointer', () => {
    const surface = document.createElement('main');
    vi.spyOn(surface, 'getBoundingClientRect').mockReturnValue({
      left: 0,
      top: 0,
      width: 100,
      height: 100,
    } as DOMRect);

    component.updateTitleParallax({
      clientX: 100,
      clientY: 0,
      currentTarget: surface,
      pointerType: 'mouse',
    } as unknown as PointerEvent);

    expect(surface.style.getPropertyValue('--title-parallax-x')).toBe('12.00px');
    expect(surface.style.getPropertyValue('--title-parallax-y')).toBe('-8.00px');
    expect(surface.style.getPropertyValue('--title-shadow-x')).toBe('-4.00px');
    expect(surface.style.getPropertyValue('--title-shadow-y')).toBe('3.00px');

    component.resetTitleParallax({ currentTarget: surface } as unknown as PointerEvent);

    expect(surface.style.getPropertyValue('--title-parallax-x')).toBe('0px');
    expect(surface.style.getPropertyValue('--title-shadow-x')).toBe('0px');
  });
});
