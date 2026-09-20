import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { ProjectFilterComponent } from './project-filter.component';

describe('ProjectFilterComponent', () => {
  let component: ProjectFilterComponent;
  let fixture: ComponentFixture<ProjectFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectFilterComponent],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
