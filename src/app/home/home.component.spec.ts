import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { PORTFOLIO_CONTENT_DATA } from '../content/local/portfolio-content.data';
import { PORTFOLIO_CONTENT, PortfolioContentSource } from '../content/portfolio-content.source';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    const source: PortfolioContentSource = {
      projectSummaries$: of(PORTFOLIO_CONTENT_DATA.projects),
      featuredProjects$: of(PORTFOLIO_CONTENT_DATA.projects.slice(0, 3)),
      profile$: of(PORTFOLIO_CONTENT_DATA.profile),
      technologies$: of(PORTFOLIO_CONTENT_DATA.technologies),
      getProjectBySlug: () => of(undefined),
      getProjectByLegacyId: () => of(undefined),
    };

    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([]), { provide: PORTFOLIO_CONTENT, useValue: source }],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
  });

  it('renders a semantic introduction and featured work from the content source', () => {
    expect(fixture.nativeElement.querySelector('h1')).toBeTruthy();
    expect(fixture.nativeElement.querySelectorAll('.featured-card').length).toBe(3);
    expect(fixture.nativeElement.textContent).toContain(PORTFOLIO_CONTENT_DATA.projects[0].name);
  });

  it('keeps project and about actions available without configured contacts', () => {
    const links = Array.from(fixture.nativeElement.querySelectorAll('a')).map(
      (link) => (link as HTMLAnchorElement).textContent
    );
    expect(links.some((label) => label?.includes('Explore selected work'))).toBeTrue();
    expect(links.some((label) => label?.includes('Meet Marc'))).toBeTrue();
  });
});
