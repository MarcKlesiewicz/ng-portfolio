import { beforeEach, describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';

import { AboutDescriptionSectionComponent } from './about-description-section.component';

describe('AboutDescriptionSectionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutDescriptionSectionComponent],
    }).compileComponents();
  });

  it('renders the active description', () => {
    const fixture = TestBed.createComponent(AboutDescriptionSectionComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Hello, and thanks for stopping by!');
  });
});
