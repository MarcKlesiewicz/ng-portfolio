import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { PORTFOLIO_CONTENT_DATA } from '../content/local/portfolio-content.data';
import { PORTFOLIO_CONTENT, PortfolioContentSource } from '../content/portfolio-content.source';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let fixture: ComponentFixture<AboutComponent>;
  beforeEach(async () => {
    const source: PortfolioContentSource = {
      projectSummaries$: of([]),
      featuredProjects$: of([]),
      profile$: of(PORTFOLIO_CONTENT_DATA.profile),
      technologies$: of(PORTFOLIO_CONTENT_DATA.technologies),
      getProjectBySlug: () => of(undefined),
      getProjectByLegacyId: () => of(undefined),
    };
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
      providers: [provideRouter([]), { provide: PORTFOLIO_CONTENT, useValue: source }],
    }).compileComponents();
    fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
  });
  it('renders authored narrative, capabilities, experience, and endorsement from the source', () => {
    expect(fixture.nativeElement.querySelector('h1')).toBeTruthy();
    expect(fixture.nativeElement.textContent).toContain(PORTFOLIO_CONTENT_DATA.profile.introduction[0]);
    expect(fixture.nativeElement.querySelectorAll('.capabilities__grid section').length).toBe(2);
    expect(fixture.nativeElement.querySelectorAll('.experience li').length).toBe(5);
    expect(fixture.nativeElement.querySelector('blockquote').textContent).toContain('competent');
  });
  it('keeps a project action when contact links are absent', () => {
    expect(fixture.nativeElement.querySelector('.about-closing a')).toBeTruthy();
  });
});
