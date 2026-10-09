import { beforeEach, describe, expect, it } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { OrbitMarkComponent } from './orbit-mark.component';

describe('OrbitMarkComponent', () => {
  let fixture: ComponentFixture<OrbitMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrbitMarkComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(OrbitMarkComponent);
    fixture.detectChanges();
  });

  it('links the orbit mark to the home page with an accessible label', () => {
    const element: HTMLElement = fixture.nativeElement;
    const link = element.querySelector<HTMLAnchorElement>('.orbit-home');

    expect(link?.getAttribute('href')).toBe('/home');
    expect(link?.getAttribute('aria-label')).toBe('Go to the home page');
  });
});
