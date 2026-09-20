import { describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { WorkCardComponent } from './work-card.component';
import { WorkItem } from '../../models/work-item.model';

describe('WorkCardComponent', () => {
  const work: WorkItem = {
    id: 'signal-input',
    slug: 'signal-input',
    name: 'Signal input',
    description: 'Input fixture',
    thumbnail: { src: 'assets/images/monto/monto_phones.png', alt: 'Fixture preview' },
    technologies: ['Angular'],
    category: 'Side quest',
    story: [],
    year: 2026,
  };

  it('renders safely without work and links supplied work to its detail view', () => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    const fixture = TestBed.createComponent(WorkCardComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.card-title')).toBeNull();

    fixture.componentRef.setInput('work', work);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.card-title').textContent.trim()).toBe('Signal input');
    expect(fixture.nativeElement.textContent).toContain('Angular');
    expect(fixture.nativeElement.querySelector('a').getAttribute('href')).toBe('/work/signal-input');
  });
});
