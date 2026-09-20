import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { ProjectPageComponent } from './project-page.component';

describe('WorkPageComponent', () => {
  let component: ProjectPageComponent;
  let fixture: ComponentFixture<ProjectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectPageComponent],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the static project data once without an async publication', () => {
    const cards = fixture.nativeElement.querySelectorAll('app-project-card');

    expect(cards.length).toBe(component.projectsService.projects.length);
    expect(cards.length).toBe(5);
    expect(component.projectsService.projects).toBe(component.projectsService.projects);
  });
});
