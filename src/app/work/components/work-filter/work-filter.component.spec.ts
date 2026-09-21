import { beforeEach, describe, expect, it } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFilterComponent } from './work-filter.component';

describe('WorkFilterComponent', () => {
  let component: WorkFilterComponent;
  let fixture: ComponentFixture<WorkFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('returns to its initial state after two toggles', () => {
    const options = fixture.nativeElement.querySelector('.work-filter-options') as HTMLElement;

    expect(component.isFilterListOpen()).toBe(false);
    expect(options.classList.contains('work-filter-options--open')).toBe(false);

    component.toggleFilterList();
    fixture.detectChanges();
    expect(component.isFilterListOpen()).toBe(true);
    expect(options.classList.contains('work-filter-options--open')).toBe(true);

    component.toggleFilterList();
    fixture.detectChanges();
    expect(component.isFilterListOpen()).toBe(false);
  });
});
