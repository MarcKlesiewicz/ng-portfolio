import { DOCUMENT } from '@angular/common';
import { Injectable, OnDestroy, inject, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MotionPreferenceService implements OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly reducedMotionQuery = this.match('(prefers-reduced-motion: reduce)');
  private readonly finePointerQuery = this.match('(hover: hover) and (pointer: fine)');
  private readonly onReducedMotionChange = (event: MediaQueryListEvent) => this.reducedMotion.set(event.matches);
  private readonly onFinePointerChange = (event: MediaQueryListEvent) => this.finePointer.set(event.matches);

  readonly reducedMotion = signal(this.reducedMotionQuery?.matches ?? false);
  readonly finePointer = signal(this.finePointerQuery?.matches ?? false);

  constructor() {
    this.reducedMotionQuery?.addEventListener('change', this.onReducedMotionChange);
    this.finePointerQuery?.addEventListener('change', this.onFinePointerChange);
  }

  ngOnDestroy(): void {
    this.reducedMotionQuery?.removeEventListener('change', this.onReducedMotionChange);
    this.finePointerQuery?.removeEventListener('change', this.onFinePointerChange);
  }

  private match(query: string): MediaQueryList | undefined {
    return this.document.defaultView?.matchMedia(query);
  }
}
