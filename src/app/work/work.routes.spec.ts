import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { providePortfolioContent } from '../content/portfolio-content.providers';
import { ProjectPageComponent } from './project-page/project-page.component';

describe('project gallery routes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([{ path: 'projects', component: ProjectPageComponent }]), providePortfolioContent()],
    });
  });

  it('restores URL-backed category and technology filters', async () => {
    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('/projects?category=work&tech=firebase,figma', ProjectPageComponent);
    expect(component.selectedProjectType()).toBe('WORK');
    expect(component.selectedTechnologies()).toEqual(['firebase', 'figma']);
    expect(component.visibleProjects().map((project) => project.slug)).toEqual(['myepi']);
  });

  it('writes user filter changes back to the URL', async () => {
    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('/projects', ProjectPageComponent);
    component.toggleTechnology('firebase');
    await harness.fixture.whenStable();
    expect(TestBed.inject(Router).url).toBe('/projects?tech=firebase');
  });
});
