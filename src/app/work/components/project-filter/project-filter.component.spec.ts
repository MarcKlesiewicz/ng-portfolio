import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PORTFOLIO_CONTENT_DATA } from '../../../content/local/portfolio-content.data';
import { ProjectFilterComponent } from './project-filter.component';

describe('ProjectFilterComponent', () => {
  let component: ProjectFilterComponent;
  let fixture: ComponentFixture<ProjectFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ProjectFilterComponent] }).compileComponents();
    fixture = TestBed.createComponent(ProjectFilterComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('technologies', PORTFOLIO_CONTENT_DATA.technologies);
    fixture.detectChanges();
  });

  it('uses semantic pressed buttons for category selection', () => {
    const buttons = fixture.nativeElement.querySelectorAll('fieldset:first-child button');
    expect(buttons.length).toBe(3);
    expect(buttons[0].getAttribute('aria-pressed')).toBe('true');
  });

  it('emits technology toggles without owning filter state', () => {
    spyOn(component.technologyToggle, 'emit');
    (fixture.nativeElement.querySelector('.filter-row--technologies button') as HTMLButtonElement).click();
    expect(component.technologyToggle.emit).toHaveBeenCalledWith('angular');
  });
});
