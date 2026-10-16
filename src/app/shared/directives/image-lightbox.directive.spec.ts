import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { ImageLightboxDirective } from './image-lightbox.directive';

@Component({
  template: '<img appImageLightbox src="/assets/images/example.jpg" alt="Project preview" />',
  imports: [ImageLightboxDirective],
})
class TestHostComponent {}

describe('ImageLightboxDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let trigger: HTMLImageElement;

  beforeEach(async () => {
    Object.defineProperty(HTMLDialogElement.prototype, 'showModal', {
      configurable: true,
      value: vi.fn(function (this: HTMLDialogElement) {
        this.setAttribute('open', '');
      }),
    });
    Object.defineProperty(HTMLDialogElement.prototype, 'close', {
      configurable: true,
      value: vi.fn(function (this: HTMLDialogElement) {
        this.removeAttribute('open');
        this.dispatchEvent(new Event('close'));
      }),
    });

    await TestBed.configureTestingModule({ imports: [TestHostComponent] }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    trigger = fixture.nativeElement.querySelector('img');
  });

  afterEach(() => fixture.destroy());

  it('makes the image keyboard-accessible', () => {
    expect(trigger.getAttribute('role')).toBe('button');
    expect(trigger.tabIndex).toBe(0);
    expect(trigger.getAttribute('aria-label')).toBe('View Project preview larger');
  });

  it('opens an enlarged copy and closes it from the close button', () => {
    trigger.click();

    const dialog = document.querySelector<HTMLDialogElement>('.image-lightbox');
    expect(dialog?.open).toBe(true);
    expect(dialog?.querySelector('img')?.alt).toBe('Project preview');
    expect(document.documentElement.classList.contains('image-lightbox-open')).toBe(true);

    dialog?.querySelector<HTMLButtonElement>('.image-lightbox-close')?.click();

    expect(document.querySelector('.image-lightbox')).toBeNull();
    expect(document.documentElement.classList.contains('image-lightbox-open')).toBe(false);
    expect(document.activeElement).toBe(trigger);
  });

  it('opens from the Space key without scrolling', () => {
    const event = new KeyboardEvent('keydown', { key: ' ', bubbles: true, cancelable: true });

    trigger.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(true);
    expect(document.querySelector('.image-lightbox')).toBeTruthy();
  });
});
