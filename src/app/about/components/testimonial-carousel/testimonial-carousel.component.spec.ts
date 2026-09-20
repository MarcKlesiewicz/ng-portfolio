import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { TestimonialCarouselComponent } from './testimonial-carousel.component';

describe('TestimonialCarouselComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialCarouselComponent],
    }).compileComponents();
  });

  it('advances, wraps, pauses on hover, and resumes with the remaining duration', fakeAsync(() => {
    const fixture = TestBed.createComponent(TestimonialCarouselComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    tick(3000);
    component.onMouseEnter();
    tick(6000);
    expect(component.currentIndex()).toBe(0);

    component.onMouseLeave();
    tick(4999);
    expect(component.currentIndex()).toBe(0);
    tick(1);
    expect(component.currentIndex()).toBe(1);

    tick(8000);
    expect(component.currentIndex()).toBe(0);

    fixture.destroy();
  }));

  it('pauses while focus stays within and resumes after focus leaves', fakeAsync(() => {
    const fixture = TestBed.createComponent(TestimonialCarouselComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    const section = fixture.nativeElement.querySelector('section') as HTMLElement;
    const child = fixture.nativeElement.querySelector('button') as HTMLElement;

    tick(2000);
    component.onFocusIn();
    component.onFocusOut({ currentTarget: section, relatedTarget: child } as unknown as FocusEvent);
    tick(7000);
    expect(component.currentIndex()).toBe(0);

    component.onFocusOut({ currentTarget: section, relatedTarget: null } as unknown as FocusEvent);
    tick(6000);
    expect(component.currentIndex()).toBe(1);

    fixture.destroy();
  }));

  it('restarts rotation after manual selection and clears the timer on destroy', fakeAsync(() => {
    const fixture = TestBed.createComponent(TestimonialCarouselComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    tick(4000);
    component.selectTestimonial(1);
    tick(7999);
    expect(component.currentIndex()).toBe(1);

    fixture.destroy();
    tick(1);
    expect(component.currentIndex()).toBe(1);
  }));
});
