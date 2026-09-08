import { TestBed } from '@angular/core/testing';
import { MotionPreferenceService } from './motion-preference.service';

describe('MotionPreferenceService', () => {
  const listeners = new Map<string, (event: MediaQueryListEvent) => void>();

  beforeEach(() => {
    listeners.clear();
    spyOn(window, 'matchMedia').and.callFake(
      (query: string) =>
        ({
          matches: query.includes('reduced-motion'),
          media: query,
          onchange: null,
          addEventListener: (_type: string, listener: (event: MediaQueryListEvent) => void) =>
            listeners.set(query, listener),
          removeEventListener: () => undefined,
          addListener: () => undefined,
          removeListener: () => undefined,
          dispatchEvent: () => true,
        } as MediaQueryList)
    );
    TestBed.configureTestingModule({});
  });

  it('starts from active media preferences', () => {
    const service = TestBed.inject(MotionPreferenceService);

    expect(service.reducedMotion()).toBeTrue();
    expect(service.finePointer()).toBeFalse();
  });

  it('updates when media preferences change', () => {
    const service = TestBed.inject(MotionPreferenceService);
    const finePointerQuery = '(hover: hover) and (pointer: fine)';

    listeners.get(finePointerQuery)?.({ matches: true } as MediaQueryListEvent);

    expect(service.finePointer()).toBeTrue();
  });
});
