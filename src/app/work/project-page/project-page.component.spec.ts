import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ProjectPageComponent } from './project-page.component';
import { providePortfolioContent } from '../../content/portfolio-content.providers';

describe('ProjectPageComponent', () => {
  let component: ProjectPageComponent;
  let fixture: ComponentFixture<ProjectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectPageComponent],
      providers: [provideRouter([]), providePortfolioContent()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the complete project set by default', () => {
    expect(fixture.nativeElement.querySelectorAll('app-project-card').length).toBe(5);
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Projects');
  });
});
