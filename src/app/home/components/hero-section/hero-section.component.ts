import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PortfolioIndexComponent } from '../../../shared/components/portfolio-index/portfolio-index.component';
import { OrbitMarkComponent } from '../../../shared/components/orbit-mark/orbit-mark.component';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PortfolioIndexComponent, OrbitMarkComponent],
})
export class HeroSectionComponent {
  updateTitleParallax(event: PointerEvent): void {
    if (event.pointerType !== 'mouse') {
      return;
    }

    const surface = event.currentTarget as HTMLElement;
    const bounds = surface.getBoundingClientRect();
    const horizontalPosition = this.normalizePointer(event.clientX, bounds.left, bounds.width);
    const verticalPosition = this.normalizePointer(event.clientY, bounds.top, bounds.height);

    surface.style.setProperty('--title-parallax-x', `${(horizontalPosition * 9).toFixed(2)}px`);
    surface.style.setProperty('--title-parallax-y', `${(verticalPosition * 6).toFixed(2)}px`);
    surface.style.setProperty('--title-rotate-x', `${(verticalPosition * -1.2).toFixed(2)}deg`);
    surface.style.setProperty('--title-rotate-y', `${(horizontalPosition * 1.4).toFixed(2)}deg`);
    surface.style.setProperty('--title-shadow-x', `${(horizontalPosition * -3).toFixed(2)}px`);
    surface.style.setProperty('--title-shadow-y', `${(verticalPosition * -2.25).toFixed(2)}px`);
  }

  resetTitleParallax(event: PointerEvent): void {
    const surface = event.currentTarget as HTMLElement;

    surface.style.setProperty('--title-parallax-x', '0px');
    surface.style.setProperty('--title-parallax-y', '0px');
    surface.style.setProperty('--title-rotate-x', '0deg');
    surface.style.setProperty('--title-rotate-y', '0deg');
    surface.style.setProperty('--title-shadow-x', '0px');
    surface.style.setProperty('--title-shadow-y', '0px');
  }

  private normalizePointer(position: number, start: number, length: number): number {
    const normalizedPosition = ((position - start) / length) * 2 - 1;
    return Math.max(-1, Math.min(1, normalizedPosition));
  }
}
