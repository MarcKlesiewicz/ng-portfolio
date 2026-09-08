import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarComponent],
      providers: [provideRouter([]), provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('opens and closes the menu through the trigger', () => {
    const trigger = fixture.nativeElement.querySelector('.z-20 a:last-child') as HTMLElement;

    trigger.click();
    expect(component.isMenuOpen).toBeTrue();

    trigger.click();
    expect(component.isMenuOpen).toBeFalse();
  });

  it('closes the menu when a route is selected', () => {
    component.toggleMenu();
    fixture.detectChanges();

    const routeLink = fixture.nativeElement.querySelector('.animated-div a') as HTMLElement;
    routeLink.click();

    expect(component.isMenuOpen).toBeFalse();
  });
});
