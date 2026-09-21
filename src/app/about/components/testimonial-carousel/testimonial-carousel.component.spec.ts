import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { TestBed } from '@angular/core/testing';

import { TestimonialCarouselComponent } from './testimonial-carousel.component';

describe('TestimonialCarouselComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialCarouselComponent],
    }).compileComponents();

    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('advances, wraps, pauses on hover, and resumes with the remaining duration', async () => {
    const fixture = TestBed.createComponent(TestimonialCarouselComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    await vi.advanceTimersByTimeAsync(3000);
    component.onMouseEnter();
    await vi.advanceTimersByTimeAsync(6000);
    expect(component.currentIndex()).toBe(0);

    component.onMouseLeave();
    await vi.advanceTimersByTimeAsync(4999);
    expect(component.currentIndex()).toBe(0);
    await vi.advanceTimersByTimeAsync(1);
    expect(component.currentIndex()).toBe(1);

    await vi.advanceTimersByTimeAsync(8000);
    expect(component.currentIndex()).toBe(0);

    fixture.destroy();
  });

  it('pauses while focus stays within and resumes after focus leaves', async () => {
    const fixture = TestBed.createComponent(TestimonialCarouselComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    const section = fixture.nativeElement.querySelector('section') as HTMLElement;
    const child = fixture.nativeElement.querySelector('button') as HTMLElement;

    await vi.advanceTimersByTimeAsync(2000);
    component.onFocusIn();
    component.onFocusOut({ currentTarget: section, relatedTarget: child } as unknown as FocusEvent);
    await vi.advanceTimersByTimeAsync(7000);
    expect(component.currentIndex()).toBe(0);

    component.onFocusOut({ currentTarget: section, relatedTarget: null } as unknown as FocusEvent);
    await vi.advanceTimersByTimeAsync(6000);
    expect(component.currentIndex()).toBe(1);

    fixture.destroy();
  });

  it('restarts rotation after manual selection and clears the timer on destroy', async () => {
    const fixture = TestBed.createComponent(TestimonialCarouselComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    await vi.advanceTimersByTimeAsync(4000);
    component.selectTestimonial(1);
    await vi.advanceTimersByTimeAsync(7999);
    expect(component.currentIndex()).toBe(1);

    fixture.destroy();
    await vi.advanceTimersByTimeAsync(1);
    expect(component.currentIndex()).toBe(1);
  });
});
