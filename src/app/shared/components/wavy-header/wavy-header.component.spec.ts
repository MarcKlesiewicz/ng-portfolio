import { describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';

import { WavyHeaderComponent } from './wavy-header.component';

describe('WavyHeaderComponent', () => {
  it('preserves its empty default and reflects title input changes', () => {
    const fixture = TestBed.createComponent(WavyHeaderComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h2').textContent.trim()).toBe('');

    fixture.componentRef.setInput('title', 'Kind words');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h2').textContent.trim()).toBe('Kind words');
  });
});
