import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { ProjectDetailPageComponent } from './project-detail-page.component';
import { providePortfolioContent } from '../../content/portfolio-content.providers';

describe('ProjectDetailPageComponent', () => {
  let component: ProjectDetailPageComponent;
  let fixture: ComponentFixture<ProjectDetailPageComponent>;
  let httpTesting: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDetailPageComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
        providePortfolioContent(),
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of(convertToParamMap({ id: '1' })) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectDetailPageComponent);
    component = fixture.componentInstance;
    httpTesting = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => httpTesting.verify());

  it('should create', () => {
    httpTesting.expectOne('assets/html/monto.html').flush('');
    expect(component).toBeTruthy();
  });

  it('loads the matching project content and keeps a gallery return link', () => {
    httpTesting.expectOne('assets/html/monto.html').flush('<p>Rental platform story</p>');
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Monto');
    expect(fixture.nativeElement.textContent).toContain('Rental platform story');
    const backLink = fixture.nativeElement.querySelector('[routerlink="/projects"]');
    expect(backLink).not.toBeNull();
  });
});
