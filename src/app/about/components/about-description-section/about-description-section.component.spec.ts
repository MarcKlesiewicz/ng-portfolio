import { TestBed } from '@angular/core/testing';

import { AboutDescriptionSectionComponent } from './about-description-section.component';

describe('AboutDescriptionSectionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutDescriptionSectionComponent],
    }).compileComponents();
  });

  it('selects each description and keeps the existing unknown-option fallback', () => {
    const fixture = TestBed.createComponent(AboutDescriptionSectionComponent);
    const component = fixture.componentInstance;

    expect(component.selectedDescription()).toContain('Hello, and thanks for stopping by!');

    component.selectedOption.set('myself-short');
    expect(component.selectedDescription()).toContain("I'm ");

    component.selectedOption.set('chat-gbt');
    expect(component.selectedDescription()).toContain('In the heart of Odense');

    component.selectedOption.set('unknown');
    expect(component.selectedDescription()).toBe('N/A');
  });
});
