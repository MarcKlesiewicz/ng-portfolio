import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostBinding, inject, OnDestroy } from '@angular/core';

@Directive({
  selector: 'img[appImageLightbox]',
  host: {
    class: 'image-lightbox-trigger',
    role: 'button',
    tabindex: '0',
    '(click)': 'open()',
    '(keydown.enter)': 'open()',
    '(keydown.space)': 'openFromSpace($event)',
  },
})
export class ImageLightboxDirective implements OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly image = inject<ElementRef<HTMLImageElement>>(ElementRef).nativeElement;
  private dialog: HTMLDialogElement | undefined;

  @HostBinding('attr.aria-label')
  get accessibleLabel(): string {
    return `View ${this.image.alt || 'image'} larger`;
  }

  open(): void {
    if (this.dialog) return;

    const dialog = this.document.createElement('dialog');
    const enlargedImage = this.document.createElement('img');
    const closeButton = this.document.createElement('button');

    dialog.className = 'image-lightbox';
    dialog.setAttribute('aria-label', `Enlarged view of ${this.image.alt || 'image'}`);

    enlargedImage.src = this.image.currentSrc || this.image.src;
    enlargedImage.alt = this.image.alt;

    closeButton.className = 'image-lightbox-close';
    closeButton.type = 'button';
    closeButton.setAttribute('aria-label', 'Close enlarged image');
    closeButton.textContent = '×';

    closeButton.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', () => this.removeDialog(true), { once: true });

    dialog.append(enlargedImage, closeButton);
    this.document.body.append(dialog);
    this.document.documentElement.classList.add('image-lightbox-open');
    this.dialog = dialog;
    dialog.showModal();
  }

  openFromSpace(event: Event): void {
    event.preventDefault();
    this.open();
  }

  ngOnDestroy(): void {
    this.removeDialog(false);
  }

  private removeDialog(restoreFocus: boolean): void {
    if (!this.dialog) return;

    this.dialog.remove();
    this.dialog = undefined;
    this.document.documentElement.classList.remove('image-lightbox-open');

    if (restoreFocus) this.image.focus();
  }
}
