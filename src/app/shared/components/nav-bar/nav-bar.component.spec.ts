import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('opens and closes the menu through the trigger', () => {
    const trigger = fixture.nativeElement.querySelector('.menu-trigger') as HTMLButtonElement;

    trigger.click();
    fixture.detectChanges();
    expect(component.isMenuOpen()).toBeTrue();
    expect(trigger.getAttribute('aria-expanded')).toBe('true');

    trigger.click();
    fixture.detectChanges();
    expect(component.isMenuOpen()).toBeFalse();
  });

  it('closes the menu when a route is selected', () => {
    component.toggleMenu();
    fixture.detectChanges();

    const routeLink = fixture.nativeElement.querySelector('.menu-links a') as HTMLElement;
    routeLink.click();

    expect(component.isMenuOpen()).toBeFalse();
  });

  it('exposes a labelled primary navigation and close control', () => {
    const navigation = fixture.nativeElement.querySelector('nav[aria-label="Primary navigation"]');
    const closeButton = fixture.nativeElement.querySelector('button[aria-label="Close menu"]');

    expect(navigation).toBeTruthy();
    expect(closeButton).toBeTruthy();
  });
});
