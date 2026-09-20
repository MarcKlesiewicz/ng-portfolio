import { beforeEach, describe, expect, it } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFilterComponent } from './project-filter.component';

describe('ProjectFilterComponent', () => {
  let component: ProjectFilterComponent;
  let fixture: ComponentFixture<ProjectFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('returns to its initial state after two toggles', () => {
    const options = fixture.nativeElement.querySelector('.project-filter-options') as HTMLElement;

    expect(component.isFilterListOpen()).toBe(false);
    expect(options.classList.contains('project-filter-options--open')).toBe(false);
    expect(options.getAttribute('aria-hidden')).toBe('true');

    component.toggleFilterList();
    fixture.detectChanges();
    expect(component.isFilterListOpen()).toBe(true);
    expect(options.classList.contains('project-filter-options--open')).toBe(true);
    expect(options.getAttribute('aria-hidden')).toBe('false');

    component.toggleFilterList();
    fixture.detectChanges();
    expect(component.isFilterListOpen()).toBe(false);
    expect(options.classList.contains('project-filter-options--open')).toBe(false);
    expect(options.getAttribute('aria-hidden')).toBe('true');
  });
});
