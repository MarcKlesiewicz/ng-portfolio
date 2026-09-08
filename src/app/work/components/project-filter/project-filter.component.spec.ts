import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { ProjectsService } from '../../data/projects.service';
import { providePortfolioContent } from '../../../content/portfolio-content.providers';
import { ProjectFilterComponent } from './project-filter.component';

describe('ProjectFilterComponent', () => {
  let component: ProjectFilterComponent;
  let fixture: ComponentFixture<ProjectFilterComponent>;
  let projectsService: ProjectsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectFilterComponent],
      providers: [provideNoopAnimations(), providePortfolioContent()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectFilterComponent);
    component = fixture.componentInstance;
    projectsService = TestBed.inject(ProjectsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('filters by project type and restores all projects', () => {
    let projectNames: string[] = [];
    const subscription = projectsService.projects$.subscribe(
      (projects) => (projectNames = projects.map((project) => project.name))
    );

    component.onFilterByProjectTypeSelected('SIDE QUESTS');
    expect(projectNames).toEqual([]);

    component.onFilterByProjectTypeSelected('ALL');
    expect(projectNames.length).toBe(5);
    subscription.unsubscribe();
  });

  it('toggles a technology and filters through the service', () => {
    spyOn(projectsService, 'filterProjects');

    component.onTechnologySelected('Firebase');
    expect(projectsService.filterProjects).toHaveBeenCalledWith('ALL', ['Firebase']);

    component.onTechnologySelected('Firebase');
    expect(projectsService.filterProjects).toHaveBeenCalledWith('ALL', []);
  });
});
