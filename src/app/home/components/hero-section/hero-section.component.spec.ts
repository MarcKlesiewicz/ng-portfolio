import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PORTFOLIO_CONTENT_DATA } from '../../../content/local/portfolio-content.data';

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
    fixture.componentRef.setInput('profile', PORTFOLIO_CONTENT_DATA.profile);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('introduces the developer before decorative artwork', () => {
    const heading = fixture.nativeElement.querySelector('h1') as HTMLElement;
    const artwork = fixture.nativeElement.querySelector('.hero__art') as HTMLElement;

    expect(heading.textContent).toContain('considered');
    expect(artwork.getAttribute('aria-hidden')).toBe('true');
  });
});
