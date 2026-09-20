import { describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  it('returns to its initial state after two toggles', async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(NavBarComponent);
    const component = fixture.componentInstance;
    const menu = fixture.nativeElement.querySelector('.nav-menu') as HTMLElement;

    fixture.detectChanges();

    expect(component.isMenuOpen()).toBe(false);
    expect(menu.classList.contains('nav-menu--open')).toBe(false);
    expect(menu.getAttribute('aria-hidden')).toBe('true');

    component.toggleMenu();
    fixture.detectChanges();
    expect(component.isMenuOpen()).toBe(true);
    expect(menu.classList.contains('nav-menu--open')).toBe(true);
    expect(menu.getAttribute('aria-hidden')).toBe('false');

    component.toggleMenu();
    fixture.detectChanges();
    expect(component.isMenuOpen()).toBe(false);
    expect(menu.classList.contains('nav-menu--open')).toBe(false);
    expect(menu.getAttribute('aria-hidden')).toBe('true');
  });
});
