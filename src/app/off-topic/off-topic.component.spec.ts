import { beforeEach, describe, expect, it } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { OffTopicComponent } from './off-topic.component';

describe('OffTopicComponent', () => {
  let fixture: ComponentFixture<OffTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffTopicComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(OffTopicComponent);
    fixture.detectChanges();
  });

  it('uses the shared masthead and marks Off topic as the current navigation item', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('app-page-masthead')).not.toBeNull();
    expect(element.querySelector('h1')?.textContent).toContain('Off topic');
    expect(element.querySelector('[aria-current="page"]')?.textContent).toContain('Off topic');
  });
});
