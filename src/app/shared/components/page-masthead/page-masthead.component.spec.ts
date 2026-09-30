import { beforeEach, describe, expect, it } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { PageMastheadComponent } from './page-masthead.component';

describe('PageMastheadComponent', () => {
  let fixture: ComponentFixture<PageMastheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMastheadComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PageMastheadComponent);
    fixture.componentRef.setInput('page', 'off-topic');
    fixture.detectChanges();
  });

  it('renders the shared page heading and home link', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('a')?.textContent).toContain('III');
    expect(element.querySelector('a')?.getAttribute('href')).toBe('/home');
    expect(element.querySelector('h1')?.textContent).toContain('Off topic');
    expect(element.querySelector('.masthead-wave')).not.toBeNull();
  });
});
