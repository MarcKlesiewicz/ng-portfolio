import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  it('returns to its initial state after two toggles', async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarComponent],
      providers: [provideNoopAnimations(), provideRouter([])],
    }).compileComponents();
    const component = TestBed.createComponent(NavBarComponent).componentInstance;

    expect(component.isMenuOpen()).toBeFalse();
    component.toggleMenu();
    expect(component.isMenuOpen()).toBeTrue();
    component.toggleMenu();
    expect(component.isMenuOpen()).toBeFalse();
  });
});
