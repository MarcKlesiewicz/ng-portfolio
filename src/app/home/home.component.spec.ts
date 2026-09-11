import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { PORTFOLIO_CONTENT_DATA } from '../content/local/portfolio-content.data';
import { PORTFOLIO_CONTENT, PortfolioContentSource } from '../content/portfolio-content.source';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let queryParamMap: BehaviorSubject<ReturnType<typeof convertToParamMap>>;

  beforeEach(async () => {
    queryParamMap = new BehaviorSubject(convertToParamMap({}));
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
      providers: [
        provideRouter([]),
        { provide: PORTFOLIO_CONTENT, useValue: source },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParamMap,
            snapshot: { queryParamMap: queryParamMap.value },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
  });

  it('renders only the holding heading in the default routed content', () => {
    const element = fixture.nativeElement as HTMLElement;
    const headings = element.querySelectorAll('h1');

    expect(headings.length).toBe(1);
    expect(headings[0].textContent).toContain('Hero in progress');
    expect(element.querySelector('[data-home-variant="corporate"]')).toBeNull();
    expect(element.querySelector('app-hero-section')).toBeNull();
    expect(element.querySelector('.featured-card')).toBeNull();
    expect(element.querySelector('.home-closing')).toBeNull();
  });

  it('keeps portfolio data ready for the corporate presentation branch', () => {
    expect(fixture.componentInstance.profile()).toEqual(PORTFOLIO_CONTENT_DATA.profile);
    expect(fixture.componentInstance.technologies()).toEqual(PORTFOLIO_CONTENT_DATA.technologies);
    expect(fixture.componentInstance.featuredProjects()).toEqual(PORTFOLIO_CONTENT_DATA.projects.slice(0, 3));
  });

  it('passes source-backed profile, technologies, and featured projects into the corporate presentation', () => {
    queryParamMap.next(convertToParamMap({ corporate: 'true' }));
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('app-corporate-resume')).toBeTruthy();
    expect(element.querySelector('h1')?.textContent).toContain(`${PORTFOLIO_CONTENT_DATA.profile.name}™`);
    expect(element.textContent).toContain(PORTFOLIO_CONTENT_DATA.profile.introduction[0]);
    expect(element.querySelectorAll('[data-featured-project]').length).toBe(3);
  });
});
