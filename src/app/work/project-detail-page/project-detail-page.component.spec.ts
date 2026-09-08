import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { PORTFOLIO_CONTENT_DATA } from '../../content/local/portfolio-content.data';
import { ProjectDetailPageComponent } from './project-detail-page.component';

describe('ProjectDetailPageComponent', () => {
  let fixture: ComponentFixture<ProjectDetailPageComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDetailPageComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: { data: of({ project: { status: 'ready', project: PORTFOLIO_CONTENT_DATA.projects[0] } }) },
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ProjectDetailPageComponent);
    fixture.detectChanges();
  });
  it('renders the resolved typed story without injecting HTML', () => {
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Monto');
    expect(fixture.nativeElement.querySelector('app-project-story')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[innerHTML]')).toBeNull();
  });
  it('keeps the current filter query on its gallery return links', () => {
    expect(fixture.nativeElement.querySelectorAll('[queryparamshandling="preserve"]').length).toBeGreaterThan(0);
  });
});
