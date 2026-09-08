import { DOCUMENT } from '@angular/common';
import { Component, DestroyRef, ElementRef, ViewChild, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  imports: [RouterLink, RouterLinkActive],
})
export class NavBarComponent {
  @ViewChild('menuDialog') private menuDialog?: ElementRef<HTMLDialogElement>;
  @ViewChild('menuTrigger') private menuTrigger?: ElementRef<HTMLButtonElement>;

  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  readonly isMenuOpen = signal(false);

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => this.focusDestination());
  }

  toggleMenu(): void {
    this.isMenuOpen() ? this.closeMenu() : this.openMenu();
  }

  openMenu(): void {
    const dialog = this.menuDialog?.nativeElement;
    if (!dialog || dialog.open) return;

    dialog.showModal();
    this.isMenuOpen.set(true);
    this.document.body.classList.add('menu-open');
    queueMicrotask(() => dialog.querySelector<HTMLElement>('a')?.focus());
  }

  closeMenu(restoreFocus = true): void {
    const dialog = this.menuDialog?.nativeElement;
    if (dialog?.open) dialog.close();
    this.isMenuOpen.set(false);
    this.document.body.classList.remove('menu-open');
    if (restoreFocus) queueMicrotask(() => this.menuTrigger?.nativeElement.focus());
  }

  onDialogCancel(event: Event): void {
    event.preventDefault();
    this.closeMenu();
  }

  private focusDestination(): void {
    this.closeMenu(false);
    setTimeout(() => {
      const destination = this.document.querySelector<HTMLElement>('main h1, main [data-route-heading], main');
      destination?.setAttribute('tabindex', '-1');
      destination?.focus({ preventScroll: true });
    });
  }
}
